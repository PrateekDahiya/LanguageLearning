function login_page() {
    signup.addEventListener('click', (e) => {
        e.preventDefault();

        var email = document.getElementById("email").value;
        var username = document.getElementById("use").value;
        var password = document.getElementById("pass").value;
        var name = document.getElementById("fullname").value;

        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                // register
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

                show_mbox(errorMessage);
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

                show_mbox(errorMessage);
            });
    });
}


function update_data(lang, div, word) {

    const currentUser = auth.currentUser;

    if (currentUser) {
        const userRef = ref(database, 'users/' + currentUser.uid);
        var updatedData = {
            language: lang,
            division: div,
            word: word
        };

        update(userRef, updatedData)
            .then(() => {
                console.log('Database update successful.');
            })
            .catch((error) => {
                console.error('Error updating database:', error);
            });
    } else {
        console.log('No user is currently logged in.');
    }
}

var goal_value = "0";

function goal(a) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var dataRef = ref(database, "users/" + user.uid);
            var updatedData = {
                goal: a
            };
            dataRef.update(updatedData);
        } else {
            console.log("User not logged in");
        }
    });
    chg_goal_html();
}
chg_goal_html();

function fetchdata(a) {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            var database = firebase.database();
            var usersRef = database.ref("users");

            usersRef.orderByChild(a).on("value", function (snapshot) {
                var Value = snapshot.val();
                console.log("Goal value is " + Value);
                goal_value = String(Value);

            })
                .catch(function (error) {
                    console.error("Error retrieving data:", error);
                });
        }
        else {
            console.log("User not logged in");
        }
    });
}

function chg_goal_html() {
    fetchdata("goal");
    setTimeout(() => { document.getElementById("crnt_goal_value").innerHTML = goal_value; }, 1500)
}
function word_goal_win() {
    document.getElementById('set_wrd_goal').style.display = "block";
}

function close_word_goal_win() {
    document.getElementById('set_wrd_goal').style.display = "none";
}





