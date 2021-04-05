import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCM39jBhj0v4HHm_7dizoYvF5maVzb2FXQ",
  authDomain: "cart-295cb.firebaseapp.com",
  projectId: "cart-295cb",
  storageBucket: "cart-295cb.appspot.com",
  messagingSenderId: "55720391280",
  appId: "1:55720391280:web:e256cda8e1931798883ab5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

