
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

import initializeAuthentication from '../../firebase/firebase.init/firebase.init';



initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log('user', user)
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unsubscribe;
    }, [])

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createAccountWithGoogle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {
        console.log('new anme', name)
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser = { ...user, displayName: name }
            setUser(newUser)
            console.log('newuser', newUser)
        })

    }
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }




    return {
        user, setUser,

        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        updateName

    }

}

export default useFirebase;