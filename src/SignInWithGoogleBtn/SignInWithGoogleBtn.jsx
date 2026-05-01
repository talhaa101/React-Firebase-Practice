import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebaseInit";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function SignInWithGoogleBtn() {
  const [user, setUser] = React.useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
      });
  };

  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <div>
        <h1>Explore with Firebase</h1>
      </div>
      <div>
        <img src={user?.photoURL || ""} alt="Profile  " />
      </div>
      <div>{user && <p>Welcome, {user.displayName}!</p>}</div>
      <div>{user && <p>{user.email}</p>}</div>

      <button onClick={handleGoogleSignIn} className="btn btn-primary">
        Sign In With Google
      </button>
    </div>
  );
}
