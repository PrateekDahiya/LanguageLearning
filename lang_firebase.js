import firebaseFunctions from "./firebase_init.js";
const { database, analytics, auth, app, set, ref, update, get, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = firebaseFunctions;


window.send_lang_div = (a) => {
    let language = a[0];
    let division = a[1];
    auth.onAuthStateChanged(function (user) {
        if (user) {
            var dataRef = ref(database, "users/" + user.uid);
            var updatedData = {
                language: language,
                division: division
            };
            update(dataRef, updatedData);
        } else {
            console.log("User not logged in");
        }

    });
}

const user = auth.currentUser;
function fetchData(a, callback) {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            var dataRef = ref(database, "users/" + user.uid + "/" + a);
            get(dataRef)
                .then(function (snapshot) {
                    var value = snapshot.val();
                    callback(value);
                })
                .catch(function (error) {
                    console.error("Error retrieving data:", error);
                    callback(value);
                });
        } else {
            console.log("User not logged in");
            callback(value);
        }
    });
}
window.send_word = () => {
    fetchData("word_count", function (result) {

        auth.onAuthStateChanged(function (user) {
            if (user) {
                var dataRef = ref(database, "users/" + user.uid);
                var updatedData = {
                    word_count: result + 1
                };
                update(dataRef, updatedData);
            } else {
                console.log("User not logged in");
            }
        });
    });
}


