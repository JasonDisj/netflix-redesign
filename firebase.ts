// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJr83imCvoMJhxqQBbZmtxFg469I8cCRo',
  authDomain: 'netflix-clone-735e2.firebaseapp.com',
  projectId: 'netflix-clone-735e2',
  storageBucket: 'netflix-clone-735e2.appspot.com',
  messagingSenderId: '711224424126',
  appId: '1:711224424126:web:5460a085dc169268ead0ef',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
