import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { current } from 'daisyui/src/colors';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth,email,password);

    };

    const LogIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };

    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const googleProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);

    };


    useEffect( () => {
       const unsubscribe=  onAuthStateChanged(auth,currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

        });

        return () => {
            return unsubscribe();
        }

    },[])


     const authInfo = {
        user,
        loading,
        createUser,
        LogIn,
        googleProviderLogin,
        LogOut,

     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;