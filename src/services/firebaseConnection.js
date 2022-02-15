/* eslint-disable prettier/prettier */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: 'AIzaSyDibeGN2Gsn2oeoN9nqoXO_CculGs2fTLk',
    authDomain: 'gabi-68c51.firebaseapp.com',
    projectId: 'gabi-68c51',
    storageBucket: 'gabi-68c51.appspot.com',
    messagingSenderId: '288366281893',
    appId: '1:288366281893:web:35a0554dd9683d3966394c',
    };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
