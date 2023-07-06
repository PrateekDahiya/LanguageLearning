import firebaseFunctions from "./firebase_init.js";
const { database, analytics, auth, app, set, ref, update, get, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = firebaseFunctions;

window.goto = (b) => {
    let a = String(b) + "_Beg.html";
    open(a, "_self");
}

function deactivateLinks() {
    const links = document.getElementsByClassName('lang_link');
    for (let i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', (event) => {
            event.preventDefault();
        });
    }
}

window.is_loggedin = () => {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log("User LoggedIn");
            // open("home.html", "_self");
        } else {
            console.log("User not logged in");
            document.getElementById("nav_linksa").style.display = "none";
            deactivateLinks();
        }
    });
}

window.log_out = () => {
    auth.signOut()
        .then(() => {
            console.log("User logged out successfully.");
        })
        .catch((error) => {
            console.error("Error during logout:", error);
        });
}
