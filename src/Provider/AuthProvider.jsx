import { createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import auth from '../firebase/Firebase.config'


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
    // Sign in

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // LogOut

    const userLogout = () => {
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe()
        }
      },[])


    const authInfo = {
        user,
        createUser,
        userSignIn,
        userLogout
        }


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;