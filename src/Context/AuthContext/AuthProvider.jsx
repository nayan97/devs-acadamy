import React, {useEffect, useState} from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


         // register user
        const createUser = (email, password) =>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
        }
  

         // Login user
        const loginUser = (email, password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
        }
         useEffect( () =>{
         const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log('user change', currentUser)

      })
      return () =>{
        unSubscribe();
      }
    }, [])
        const authInfo = {
            user, 
            createUser,
            loading,
            loginUser
             
    }
    return (
       <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;