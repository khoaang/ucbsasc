import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  getDoc,
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';

export interface Member {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  year: string;
  major?: string;
  interests: string[];
  joinDate: Timestamp;
  isActive: boolean;
  eventsAttended: string[];
  notes?: string;
}

const MEMBERS_COLLECTION = 'members';

// Add a new member
export const addMember = async (memberData: Omit<Member, 'id' | 'joinDate' | 'isActive' | 'eventsAttended'>) => {
  try {
    const member: Omit<Member, 'id'> = {
      ...memberData,
      joinDate: Timestamp.now(),
      isActive: true,
      eventsAttended: []
    };
    
    const docRef = await addDoc(collection(db, MEMBERS_COLLECTION), member);
    return { id: docRef.id, ...member };
  } catch (error: any) {
    // Surface more details for debugging
    console.error('Error adding member:', error?.code, error?.message, error);
    throw error;
  }
};

// Get all members
export const getMembers = async (): Promise<Member[]> => {
  try {
    const q = query(collection(db, MEMBERS_COLLECTION), orderBy('joinDate', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Member[];
  } catch (error) {
    console.error('Error getting members:', error);
    throw error;
  }
};

// Update a member
export const updateMember = async (memberId: string, updates: Partial<Member>) => {
  try {
    const memberRef = doc(db, MEMBERS_COLLECTION, memberId);
    await updateDoc(memberRef, updates);
  } catch (error) {
    console.error('Error updating member:', error);
    throw error;
  }
};

// Delete a member
export const deleteMember = async (memberId: string) => {
  try {
    const memberRef = doc(db, MEMBERS_COLLECTION, memberId);
    await deleteDoc(memberRef);
  } catch (error) {
    console.error('Error deleting member:', error);
    throw error;
  }
};

// Add event attendance for a member
export const addEventAttendance = async (memberId: string, eventName: string) => {
  try {
    const memberRef = doc(db, MEMBERS_COLLECTION, memberId);
    const memberDoc = await getDoc(memberRef);
    
    if (memberDoc.exists()) {
      const memberData = memberDoc.data() as Member;
      const updatedEvents = [...(memberData.eventsAttended || []), eventName];
      
      await updateDoc(memberRef, {
        eventsAttended: updatedEvents
      });
    }
  } catch (error) {
    console.error('Error adding event attendance:', error);
    throw error;
  }
};
