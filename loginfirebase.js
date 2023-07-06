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

window.is_loggedin = () => {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log("User LoggedIn");
            open("home.html", "_self");
        } else {
            console.log("User not logged in");
            document.getElementById("nav_linksa").style.display = "none";
        }
    });
}


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
            open("home.html", "_self");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            show_mbox("Error Code: ", errorCode, "\n", "Error: ", errorMessage);
        });
});
