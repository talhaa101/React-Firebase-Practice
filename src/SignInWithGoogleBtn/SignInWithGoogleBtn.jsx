import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "../firebase/firebaseInit";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function SignInWithGoogleBtn() {
  const [user, setUser] = React.useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = result.user;
        // console.log("User Info:", userInfo);
        setUser(userInfo);
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <div>
        <h1>Explore with Firebase</h1>
      </div>

      <div>
        {user && (
          <>
            <p>Welcome, {user.displayName}!</p>
            <p>{user.email}</p>
          </>
        )}
      </div>

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      )}

    </div>
  );
}