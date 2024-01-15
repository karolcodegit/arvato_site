import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./users";


export const addUser = async (userData, password) => {
  const auth = getAuth();

  // Generate the email address
  const email = `${userData.Name}.${userData.Surname}@codecraft.com`;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // The user has been created in Firebase Authentication.
    // Now we create a document in Firestore with the same ID.
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      ...userData
    });

   
    
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    throw error;
  }
}