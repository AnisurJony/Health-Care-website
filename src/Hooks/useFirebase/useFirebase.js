
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../firebase/firebase.init/firebase.init';



initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user)
        // })
        // .catch(error => {
        //     setError(error.message)
        // })


    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    // observe wheather user auth state change or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }

        });
        return unsubscribe;
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;