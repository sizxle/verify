import React, {useContext,useState,useEffect} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState();

    function register(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //unsubscribe deletes onAuthstateChange event
    //run only when mounting component
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setCurrentUser(user)
        });
         return unsubscribe
    }, [])

    const value={
        currentUser,
        register
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;