
function toggleForm(a) {
    if (a == 'R') {
        document.getElementById('register-form').style.display = "block";
        document.getElementById('login-form').style.display = "none";
    }
    else {
        document.getElementById('login-form').style.display = "block";
        document.getElementById('register-form').style.display = "none";
    }
}


// function register() {
//     let a = document.getElementById("use").value;
//     let b = document.getElementById("pass").value;

//     if (a != "" && b != "") {
//         createUser(a, b);
//         // console.log("UserCreated");
//     }
// }

// function login() {
//     let a = document.getElementById("username").value;
//     let b = document.getElementById("password").value;

//     authenticateUser(a,b);
//     // console.log("Data Matched");
// }



