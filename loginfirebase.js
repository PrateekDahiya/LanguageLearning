import firebaseFunctions from "./firebase_init.js";
const { database, analytics, auth, app, set, ref, update, get, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = firebaseFunctions;

signup.addEventListener('click', (e) => {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var username = document.getElementById("use").value;
    var password = document.getElementById("pass").value;
    var name = document.getElementById("fullname").value;

    createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
            const user = userCredential.user;

            set(ref(database, "users/" + user.uid), {
                name: name,
                username: username,
                email: email,
                language: null,
                division: 0,
                word: 0
            });
            show_mbox("User Created Successfully.", "login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            show_mbox("Error Code: " + errorCode + "\n" + "Error: " + errorMessage);
        });
});

login.addEventListener('click', (e) => {
    e.preventDefault();
    var email = document.getElementById("emaillogin").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const dt = new Date();
            update(ref(database, "users/" + user.uid), {
                last_login: dt,
            });

            show_mbox("User Logged In Successfully.", "home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            show_mbox("Error Code: ", errorCode, "\n", "Error: ", errorMessage);
        });
});
