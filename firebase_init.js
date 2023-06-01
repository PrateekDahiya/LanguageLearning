import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getDatabase, set, ref, update, get } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDh4XjShuxTvJMM_HVl1AajvRsfpqN2Hdw",
    authDomain: "lingoverse-37674.firebaseapp.com",
    databaseURL: "https://lingoverse-37674-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lingoverse-37674",
    storageBucket: "lingoverse-37674.appspot.com",
    messagingSenderId: "1076297862713",
    appId: "1:1076297862713:web:94a905ae54dbb8e8e607e8",
    measurementId: "G-1WF8Y16YZ5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

const firebaseFunctions = {
    database,
    analytics,
    auth,
    app,
    set,
    ref,
    update,
    get,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
};

export default firebaseFunctions;
