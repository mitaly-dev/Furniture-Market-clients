import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('mitaly')
    const auth = getAuth(app)

    // create user account 
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user signin
    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update user profile 
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const value={
        user,
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;