// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
// import {  createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";

const auth = getAuth(app);
 export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // useEffect(() =>{
    //    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
    //         setUser(currentUser)
    //         setLoading(false)
    //         console.log("Observing ",currentUser)
    //     });
    //     return () =>{
    //         unSubscribe();
    //     }
    // }, [])


    const userInfo = {user, createUser, signInUser, logOut, loading}
   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;