import firebaseFunctions from "./firebase_init.js";
const { database, analytics, auth, app, set, ref, update, get, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = firebaseFunctions;

// var goal_value;
var language;
var level;

window.goal = (a) => {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            var dataRef = ref(database, "users/" + user.uid);
            var updatedData = {
                goal: a
            };
            update(dataRef, updatedData);
        } else {
            console.log("User not logged in");
        }

    });
}


const user = auth.currentUser;
function fetchData(a, callback) {
    var goal_value = "0";
    auth.onAuthStateChanged(function (user) {
        if (user) {
            var dataRef = ref(database, "users/" + user.uid + "/" + a);
            get(dataRef)
                .then(function (snapshot) {
                    var value = snapshot.val();
                    // console.log(a + " Value: " + value);
                    goal_value = value;
                    callback(goal_value);
                })
                .catch(function (error) {
                    console.error("Error retrieving data:", error);
                    callback(goal_value);
                });
        } else {
            console.log("User not logged in");
            callback(goal_value);
        }
    });
}


window.updateElements = () => {
    setInterval(function () {
        fetchData("division", function (result) {
            document.getElementById("crnt_level").innerHTML = result;

        });
        fetchData("language", function (result) {
            document.getElementById("crnt_lang").innerHTML = result;
        });
        fetchData("goal", function (result) {
            document.getElementById("crnt_goal_value").innerHTML = result;
        });
        fetchData("word_count", function (result) {
            document.getElementById("word_num").innerHTML = result;
        });
    }, 1000);
}




