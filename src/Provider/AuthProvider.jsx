import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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


    const authInfo = {
        user,
        createUser,
        userSignIn
        }

        
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;