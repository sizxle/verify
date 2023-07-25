import React, {useContext,useState,useEffect} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider( { children}){
    const [currentUser,setCurrentUser]=useState();
    const [loading,setLoading]=useState(true);

    function register(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
        return signOut(auth);
    }

    //unsubscribe deletes onAuthstateChange event
    //run only when mounting component
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setCurrentUser(user);
            setLoading(false);
        });
         return unsubscribe
    }, [])

    const value={
        currentUser,
        register,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext;