import { useEffect, useState } from "react";

import initializeFirebase from "../../components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// initialize firebase



initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();





    const googleProvider = new GoogleAuthProvider();

    // handle register function
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }


                setUser(newUser);



                handleNameEmail(email, name)
                //  send name to firebase after creation



                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');

            })
            .catch((error) => {

                setAuthError(error.message);
                // ..
            })

            .finally(() => setIsLoading(false));
    }
    // handle login function
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/';
                history.replace(destination)


                setAuthError('');

            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // google signing function


    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setAuthError('');

            }).catch((error) => {
                setAuthError(error.message);


            })
            .finally(() => setIsLoading(false));

    }



    // user observer state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
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



    const handleNameEmail = (email, displayName) => {

        const user = { email, displayName };

        fetch('https://fast-gorge-58002.herokuapp.com/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)


        })
            .then()




    }














    // handle logout function

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }


    return {
        user,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle,
        isLoading,
        authError
    }
}


export default useFirebase;