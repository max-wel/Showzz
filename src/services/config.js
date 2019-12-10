import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARZQHkmmk_OEqSJ4LP_Vtvc4IJjUXp6u4",
  authDomain: "showzz-117d4.firebaseapp.com",
  databaseURL: "https://showzz-117d4.firebaseio.com",
  projectId: "showzz-117d4",
  appId: "1:957008605841:web:752bdca006742bc3c00530"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
