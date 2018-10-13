import firebase from 'firebase';

import { firebaseInit } from './config.js';

export const Firebase = firebase.initializeApp(firebaseInit);
