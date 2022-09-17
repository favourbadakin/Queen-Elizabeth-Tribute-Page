import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjnRc_HRp8JGtfZkJxW9cogXeLrQtSLqQ",
  authDomain: "elizabeth-ii-73fc4.firebaseapp.com",
  projectId: "elizabeth-ii-73fc4",
  storageBucket: "elizabeth-ii-73fc4.appspot.com",
  messagingSenderId: "1075937055939",
  appId: "1:1075937055939:web:2d0c9358a7b48dbf1a3e76",
};

const app = initializeApp(firebaseConfig);

 export const db =  getFirestore(app)
