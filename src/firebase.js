import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import  'firebase/compat/database'
import firebase  from 'firebase/compat/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAiP39K3DsLqRWap95oU7HWlIFSMqWKTbY",
  authDomain: "modevco-school.firebaseapp.com",
  projectId: "modevco-school",
  storageBucket: "modevco-school.appspot.com",
  messagingSenderId: "377203904695",
  appId: "1:377203904695:web:804f41f6755b87b162bd32"
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const dataRef = firebase.database()