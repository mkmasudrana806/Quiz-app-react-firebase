import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";

const AuthContext = createContext();

// so that we don't need to call useContext and pass context in each component. we make a custom hooks, we only call this hooks. no need to pass the context.
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth(app);

  //any changes in firebase made events onAuthStateChanged.
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    // don't invoke
    return unsubscribe;
  }, [auth]);

  // **************************** signup ****************************
  // note: as server request, use async await
  const signup = async (email, password, username) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // update profile
      await updateProfile(auth.currentUser, { displayName: username });
    } catch (error) {
      console.log("error while sign up in signup context");
    }
  };

  // ********************************* login *****************************
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error while login in context");
    }
  };

  // ******************************** logout ********************************
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error while logout in context");
    }
  };

  // object for AuthContext to pass to the AuthContext.Provider
  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
