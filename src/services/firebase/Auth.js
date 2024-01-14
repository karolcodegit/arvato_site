import React, { useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('token') ? true : null);
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // User is signed in, get the token
          const token = await getIdToken(user);
          // Set the token in localStorage
          localStorage.setItem('token', token);
          setCurrentUser(user);
        } else {
          // User is signed out, clear the token from localStorage
          localStorage.removeItem('token');
            setCurrentUser(null);
        }
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>; // Or your loading component
    }


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const logoutUser = async () => {
  const auth = getAuth();
  await signOut(auth);
  localStorage.removeItem('token');
};
