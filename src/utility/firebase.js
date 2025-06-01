// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCprZlbrGpatyc00ovXhfm0WE03AVLhOuA',
	authDomain: 'clone-dd832.firebaseapp.com',
	projectId: 'clone-dd832',
	storageBucket: 'clone-dd832.firebasestorage.app',
	messagingSenderId: '454514189112',
	appId: '1:454514189112:web:8443235653c762a6f897cd'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
