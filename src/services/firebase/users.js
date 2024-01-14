import React, { createContext, useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'firebase/firestore';
import { app } from './firebaseConfig';


export const db = getFirestore(app);
export const UsersContext = createContext([]);
export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            
            const usersCollection = collection(db,'users')
            const userSnapshot = await getDocs(usersCollection);
            const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(userList);
        }
        fetchUsers();
    }, [])

  return (
    <UsersContext.Provider value={users}>
        {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider