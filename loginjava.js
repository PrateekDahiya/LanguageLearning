
function register() {
    let a = document.getElementById("use").value;
    let b = document.getElementById("pass").value;

    if (a != "" && b != "") {
        localStorage.setItem(a, b);
        alert("Signed Up");
    }
}

function login() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;

    if (localStorage.getItem(a) == b) {
        alert("Signed it");
    }
    else {
        alert("Invalid");
    }
}


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



