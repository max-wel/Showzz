import { auth } from "../services/config";
import firebase from "firebase/app";

export const socialAuth = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  return result;
};
