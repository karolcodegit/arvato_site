import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

export const getData = async (collect) => {
    const data = await getDocs(collection(db, collect));
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const addData = async (collect, data) => {
    const docRef = await addDoc(collection(db, collect), data);
    return docRef.id; // zwraca ID nowo utworzonego dokumentu
}

export const updateData = async (collect, id, data) => {
    const docRef = doc(db, collect, id);
    await updateDoc(docRef, data);
}

export const deleteData = async (collect, id) => {
   const docRef = doc(db, collect, id);
   await deleteDoc(docRef);
}
