import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from './config';

export interface EventRsvp {
  id?: string;
  eventKey: string;
  name: string;
  email: string;
  createdAt: Timestamp;
}

const RSVPS_COLLECTION = 'event_rsvps';

export const addEventRsvp = async (eventKey: string, name: string, email: string) => {
  const payload: Omit<EventRsvp, 'id'> = {
    eventKey,
    name,
    email,
    createdAt: Timestamp.now(),
  };
  const docRef = await addDoc(collection(db, RSVPS_COLLECTION), payload);
  return { id: docRef.id, ...payload };
};


