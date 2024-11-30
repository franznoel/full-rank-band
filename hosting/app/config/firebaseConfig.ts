import { initializeApp, getApps, getApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDU8LUeVG810ieBVgUBMnSL_dSBKp4WC94",
  authDomain: "fullrankband.firebaseapp.com",
  projectId: "fullrankband",
  storageBucket: "fullrankband.firebasestorage.app",
  messagingSenderId: "533546925102",
  appId: "fullrankband",
};

// Initialize Firebase app only if no app is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Storage
export const storage = getStorage(app);
