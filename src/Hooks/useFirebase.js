import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    return {
        user,
        handleGoogleSignIn,
        handleSignOut
    }
};

export default useFirebase;