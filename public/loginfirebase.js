import firebaseFunctions from "./firebase_init.js";
const { database, analytics, auth, app, set, ref, update, get, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateEmail, sendEmailVerification, firestore, doc, setDoc, updateDoc, addDoc, collection, arrayUnion, arrayRemove, increment, getDoc } = firebaseFunctions;

function empty_form() {
    document.getElementById('fullname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('use').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('confirm-password').value = "";
}

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
                language: "Hindi",
                division: "Beginner",
                difficult: null,
                goal: 10,
                word_count: 0,
                journey_database: []
            });
            const Ref = doc(firestore, "Users", user.uid);
            setDoc(Ref, {
                Name: name,
                username: username,
                email: email,
                last_login: 0,
                language: {
                    language: "Hindi",
                    division: "Beginner",
                    difficult: null,
                    goal: 10,
                    word_count: 0,
                },
                journey_database: []
            }, { merge: true });


            show_mbox("User Created Successfully.");
            empty_form();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            show_mbox("Error Code: " + errorCode + "<br>" + "Error: " + errorMessage);
        });


});

function auto_login() {
    var asd = document.getElementById("register-form");
    var style = window.getComputedStyle(asd);
    console.log(style.display);
    if (style.display == "none") {
        open("home.html", "_self");
    }
}

window.is_loggedin = () => {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log("User LoggedIn");
            auto_login();
        } else {
            console.log("User not logged in");
        }
    });
};


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

            const Ref = doc(firestore, "Users", user.uid);
            setDoc(Ref, {
                last_login: dt
            }, { merge: true });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            show_mbox("Error Code: " + errorCode + "<br>" + "Error: " + errorMessage);
        });
});



window.resetpassword = () => {
    event.preventDefault();
    let email = document.getElementById("email-pass-reset").value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("Password reset email sent successfully.");
            show_mbox("Password reset email sent successfully.");
            password_reset();
        })
        .catch((error) => {
            if (error.code === "auth/invalid-email") {
                console.log("Invalid email address.");
                show_mbox("Invalid email address.");
            } else if (error.code === "auth/user-not-found") {
                console.log("User not found.");
                show_mbox("User not found.");
            } else {
                console.log("Failed to send password reset email.");
                show_mbox("Failed to send password reset email.");
            }
        });
};


window.changeEmail = (newEmail) => {
    const user = auth.currentUser;

    if (user) {
        updateEmail(user, newEmail)
            .then(() => {
                console.log("Email address changed successfully.");
            })
            .catch((error) => {
                console.log("Failed to change email address.");
            });
    } else {
        console.log("User not signed in.");
    }
};

window.recoverEmail = (email) => {
    sendEmailVerification(auth, { email })
        .then(() => {
            console.log("Email recovery email sent successfully.");
        })
        .catch((error) => {
            if (error.code === "auth/invalid-email") {
                console.log("Invalid email address.");
            } else if (error.code === "auth/user-not-found") {
                console.log("User not found.");
            } else {
                console.log("Failed to send recovery email.");
            }
        });
};
