import { createContext, useEffect, useState } from "react";
import { app } from "./firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";
import Loading from "../../components/Loading/Loading";

export const AuthContext = createContext(null);
const db = getFirestore(app);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserDetails = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserDetails(docSnap.data());
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchUserDetails(user.uid);
      } else {
        setCurrentUser(null);
        setUserDetails(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <Loading />; // Or your loading component
  }

  return (
    <AuthContext.Provider value={{ currentUser, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const loginUser = async (email, password) => {
  const auth = getAuth();
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in", error);
  }
};

export const logoutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
