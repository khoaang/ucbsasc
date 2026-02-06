import { addDoc, collection, serverTimestamp, query, where, getDocs, orderBy, updateDoc, doc, Timestamp } from 'firebase/firestore';
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


