import firebase from 'firebase';

import { firebaseInit } from 'consts';

export const Firebase = firebase.initializeApp(firebaseInit);
