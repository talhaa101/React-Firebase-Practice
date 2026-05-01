import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase/firebaseInit';


const auth = getAuth(app);  
const provider = new GoogleAuthProvider();

export default function SignInWithGoogleBtn() {

    const handleGoogleSignIn = () => {  
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;   
            console.log(user.displayName);
        })
        .catch((error) => {
            console.error("Error signing in:", error.message);
        });
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-primary'>
                Sign In With Google
            </button>
        </div>
    );
}