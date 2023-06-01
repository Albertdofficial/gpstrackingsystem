import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA9h7Vhn-jbbXHSLja0Ys7vi5kyairYngo",
  authDomain: "trackingsystem-4ee26.firebaseapp.com",
  projectId: "trackingsystem-4ee26",
  storageBucket: "trackingsystem-4ee26.appspot.com",
  messagingSenderId: "736751843772",
  appId: "1:736751843772:web:63b07393c7f639b91353b9",
  measurementId: "G-DQHV6HML9B"
};

// init firebase
const firebaseApp = initializeApp(firebaseConfig)

const RT_database = getDatabase(firebaseApp);

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export {db, auth, RT_database}