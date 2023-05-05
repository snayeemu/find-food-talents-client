import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase.config";

export const AuthContext = React.createContext(null);
const AuthContext = () => {
  const auth = getAuth(app);
  return <AuthContext.Provider value={""}></AuthContext.Provider>;
};

export default AuthContext;
