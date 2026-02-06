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
export const checkInStudentWithTransaction = async (rsvpId: string, eventKey: string, newName?: string) => {
  return await runTransaction(db, async (transaction) => {
    const rsvpRef = doc(db, RSVPS_COLLECTION, rsvpId);
    const rsvpDoc = await transaction.get(rsvpRef);
    
    if (!rsvpDoc.exists()) {
      throw new Error("RSVP does not exist!");
    }

    const data = rsvpDoc.data() as EventRsvp;
    
    // If already checked in, return existing data (but update name if provided and different)
    if (data.checkedIn && data.sequenceNumber) {
      if (newName && newName !== data.name) {
        transaction.update(rsvpRef, { name: newName });
        return { ...data, id: rsvpId, name: newName };
      }
      return { ...data, id: rsvpId };
    }

    // Find current max sequence number for this event
    const q = query(
      collection(db, RSVPS_COLLECTION),
      where('eventKey', '==', eventKey),
      where('checkedIn', '==', true)
    );
    const snapshot = await getDocs(q);
    
    let maxSeq = 0;
    snapshot.forEach(d => {
      const seq = d.data().sequenceNumber;
      if (typeof seq === 'number' && seq > maxSeq) maxSeq = seq;
    });

    const nextSeq = maxSeq + 1;

    const updates: any = {
      checkedIn: true,
      checkedInAt: serverTimestamp(),
      sequenceNumber: nextSeq
    };
    if (newName && newName !== data.name) {
      updates.name = newName;
    }

    transaction.update(rsvpRef, updates);

    return { ...data, ...updates, id: rsvpId, name: newName || data.name };
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


