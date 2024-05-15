import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyC8MDmVJzZ84LPvVrrTsPMWYDlAfuPSrqA",
    authDomain: "odpbatch4.firebaseapp.com",
    projectId: "odpbatch4",
    storageBucket: "odpbatch4.appspot.com",
    messagingSenderId: "931667064933",
    appId: "1:931667064933:web:c769cf12a930a387b42e8c",
    measurementId: "G-WRPXBN8NHH"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const Firebase = {
    app: firebaseApp,
    auth: firebaseAuth
}

export default Firebase;


