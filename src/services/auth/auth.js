import { initializeApp } from "firebase/app";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

const signOut = async(email, password) => {
    return await firebaseSignOut(auth);
};

const getCurrentUser = () => {
    return auth.currentUser;
};

export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export { auth, signUp, signIn, signOut, getCurrentUser, onAuthStateChange };