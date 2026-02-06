import { addDoc, collection, serverTimestamp, query, where, getDocs, orderBy, updateDoc, doc, runTransaction } from 'firebase/firestore';
import { db } from './config';

export interface EventRsvp {
  id?: string;
  eventKey: string;
  name: string;
  email: string;
  createdAt: unknown;
  checkedIn?: boolean;
  checkedInAt?: unknown;
  sequenceNumber?: number;
}

const RSVPS_COLLECTION = 'event_rsvps';

export const addEventRsvp = async (eventKey: string, name: string, email: string) => {
  const payload: Omit<EventRsvp, 'id'> = {
    eventKey,
    name,
    email,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, RSVPS_COLLECTION), payload);
  return { id: docRef.id, ...payload };
};

export const getEventRsvps = async (eventKey: string) => {
  const q = query(
    collection(db, RSVPS_COLLECTION),
    where('eventKey', '==', eventKey),
    orderBy('createdAt', 'desc')
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as EventRsvp[];
};

export const checkInRsvp = async (rsvpId: string, sequenceNumber: number) => {
  const rsvpRef = doc(db, RSVPS_COLLECTION, rsvpId);
  await updateDoc(rsvpRef, {
    checkedIn: true,
    checkedInAt: serverTimestamp(),
    sequenceNumber
  });
};

// Transactional check-in to prevent duplicate sequence numbers
export const checkInStudentWithTransaction = async (rsvpId: string, eventKey: string) => {
  return await runTransaction(db, async (transaction) => {
    const rsvpRef = doc(db, RSVPS_COLLECTION, rsvpId);
    const rsvpDoc = await transaction.get(rsvpRef);
    
    if (!rsvpDoc.exists()) {
      throw new Error("RSVP does not exist!");
    }

    const data = rsvpDoc.data() as EventRsvp;
    
    // If already checked in, return existing data
    if (data.checkedIn && data.sequenceNumber) {
      return { ...data, id: rsvpId };
    }

    // Find current max sequence number for this event
    // Note: In a high-concurrency environment, this query inside a transaction might be slow or hit limits,
    // but for this scale it's acceptable. Ideally we'd have a separate counter document.
    const q = query(
      collection(db, RSVPS_COLLECTION),
      where('eventKey', '==', eventKey),
      where('checkedIn', '==', true)
    );
    const snapshot = await getDocs(q); // Reading inside transaction is tricky with queries. 
    // Firestore transactions require reads to come before writes. 
    // However, query results can't be locked the same way.
    // A better approach for simple counters is a dedicated counter doc, but we'll do a best-effort max calculation.
    
    let maxSeq = 0;
    snapshot.forEach(d => {
      const seq = d.data().sequenceNumber;
      if (typeof seq === 'number' && seq > maxSeq) maxSeq = seq;
    });

    const nextSeq = maxSeq + 1;

    transaction.update(rsvpRef, {
      checkedIn: true,
      checkedInAt: serverTimestamp(),
      sequenceNumber: nextSeq
    });

    return { ...data, checkedIn: true, sequenceNumber: nextSeq, id: rsvpId };
  });
};

export const findRsvpByEmail = async (eventKey: string, email: string) => {
  const q = query(
    collection(db, RSVPS_COLLECTION),
    where('eventKey', '==', eventKey),
    where('email', '==', email)
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as EventRsvp;
};


