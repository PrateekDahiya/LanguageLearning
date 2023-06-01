
var headto;
const urlParams = new URLSearchParams(window.location.search);
const functionName = urlParams.get('functionName');

window.onload = function () {
    if (functionName === 'login') {
        toggleForm("L");
    } else if (functionName === 'register') {
        toggleForm("R");
    }
};

function toggleForm(a) {
    if (a == "R") {
        document.getElementById('register-form').style.display = "block";
        document.getElementById('login-form').style.display = "none";
    }
    else {
        document.getElementById('login-form').style.display = "block";
        document.getElementById('register-form').style.display = "none";
    }
}

function show_mbox(a, b = def) {

    document.getElementById("click-protector").style.display = "block";
    document.getElementById("message_text").innerHTML = a;
    headto = b;
}
function OK() {
    if (headto == "login") {
        open("login.html?functionName=login", "_self");
    }
    else if (headto == "home") {
        open("home.html", "_self");
    }
    else {
        hide_mbox();
    }

}

function hide_mbox() {
    document.getElementById("click-protector").style.display = "none";
}



