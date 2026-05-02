import React from 'react'

import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebaseInit";

const SigninWithFB = () => {

const FBprovider = new FacebookAuthProvider();

const fbLogin = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, FBprovider)
      .then((result) => {
        // Handle successful sign-in
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error.message);
      });
  };

  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <button onClick={fbLogin}>Sign In With Facebook</button>
    </div>
  )
}

export default SigninWithFB
