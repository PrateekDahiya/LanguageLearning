var is_heard = 0;
var i = 0;
var divtext = ['Beginner', 'Moderate', 'Advance'];
var divisions = ['Beg', 'Mod', 'Adv'];
var num_words = english.length;
var withromanji = ['japanese', 'chinese', 'tamil', 'korean', 'russian'];


let containerlist = document.getElementById("container_list");
let radioinputs = document.getElementsByClassName("radio-inputs")[0];
containerlist.addEventListener("mouseover", showList);
radioinputs.addEventListener("mouseover", showList);

var a, b;

containerlist.addEventListener("mouseout", function () {
    a = setTimeout(hideList, 1000);
});
radioinputs.addEventListener("mouseout", function () {
    b = setTimeout(hideList, 1000);
});

function showList() {
    clearTimeout(a);
    clearTimeout(b);
    radioinputs.style.display = "flex";
}

function hideList() {
    radioinputs.style.display = "none";
}

function disable_googletrans() {
    // Bypass Google Translate popup and disable automatic translation
    document.cookie = 'googtrans=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

setInterval(hide_loading, 1000);
function hide_loading() {
    document.getElementById('loading-back').style.display = "none";
    document.getElementById('loading').style.display = "none";
}


disable_googletrans();

// Check for local storage variables exists or not
function checkLSV(variable) {
    if (localStorage.getItem(variable) !== null) {
        return true;
    } else {
        return false;
    }
}


// For making all functions work properly
nextword();
backword();
var pre_div = divtext[div_num - 1];
var nxtdiv = divtext[div_num + 1];

// document.getElementById('ndivision').innerHTML = nxtdiv;
// document.getElementById('pdivision').innerHTML = pre_div;

document.getElementById('backward').style.display = "none";
// document.getElementById('nextdivision').style.display = "none";

if (div_num == 0) {
    document.getElementById('Beg_div').style.border = "2px solid black";
}
else if (div_num == 1) {
    document.getElementById('Mod_div').style.border = "2px solid black";
}
else if (div_num == 2) {
    document.getElementById('Adv_div').style.border = "2px solid black";
}

function speak(b) {
    var msg = new SpeechSynthesisUtterance(otherlang[i]);
    msg.lang = b;
    window.speechSynthesis.speak(msg);
    is_heard = 1;
}
function speakeng() {
    var msg = new SpeechSynthesisUtterance(english[i]);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}
function nextword() {
    // for goining to next word
    uncheck_diff();
    if (i < english.length - 1) {
        i = i + 1;
        document.getElementById("lang").innerHTML = otherlang[i];
        document.getElementById("eng").innerHTML = english[i];
        for (let k = 0; k < withromanji.length; k++) {
            if (withromanji.includes(language)) {
                document.getElementById("romaji").innerHTML = romaji[i];
            }
        }
    }
    if (i == 0) {
        document.getElementById('backward').style.display = "none";
    }
    else (document.getElementById('backward').style.display = "block");
    if (i == english.length - 1) {
        document.getElementById('continue').style.display = "none";
    } else {
        document.getElementById('continue').style.display = "block";
    }
}
function backword() {
    // For going to previous word
    uncheck_diff();
    if (i > 0) {
        i = i - 1;
        document.getElementById("lang").innerHTML = otherlang[i];
        document.getElementById("eng").innerHTML = english[i];
        for (let k = 0; k < withromanji.length; k++) {
            if (withromanji.includes(language)) {
                document.getElementById("romaji").innerHTML = romaji[i];
            }
        }
    }
    if (i == 0) {
        document.getElementById('backward').style.display = "none";
    }
    else (document.getElementById('backward').style.display = "block");
    if (i == english.length - 1) {
        document.getElementById('continue').style.display = "none";
    } else {
        document.getElementById('continue').style.display = "block";
    }
}
// For Division Menu
document.getElementById("Beg_div").innerHTML = divtext[0];
document.getElementById("Mod_div").innerHTML = divtext[1];
document.getElementById("Adv_div").innerHTML = divtext[2];

function chng_div(n) {
    uncheck_diff();
    link = String(String(language) + "_" + String(divisions[n]) + ".html");
    open(link, "_parent");
}

// Division change
// function check_nxtdiv(i) {
//     uncheck_diff();

//     if ((i == english.length - 1) && (div_num < 2)) {
//         document.getElementById('nextdivision').style.display = "block";
//     }
//     else {
//         document.getElementById('nextdivision').style.display = "none";
//     }
//     if (i == 0 && div_num > 0) {
//         document.getElementById('prevdivision').style.display = "block";
//     }
//     else {
//         document.getElementById('prevdivision').style.display = "none";
//     }
// }

// function nextdiv() {
//     uncheck_diff();
//     link = String(String(language) + "_" + String(divisions[div_num + 1]) + ".html");
//     open(link, "_parent");

// }

// function prevdiv() {
//     uncheck_diff();
//     link = String(String(language) + "_" + String(divisions[div_num - 1]) + ".html");
//     open(link, "_parent");
// }

// currentuser = firebase.auth().currentUser;
// console.log(currentuser)
// if (currentuser) {
//     const email = currentUser.email;
// }

// console.log(email)

// Difficult words array

function addtodiff() {
    if (!checkLSV('difficult')) {
        localStorage.setItem('difficult', JSON.stringify([]));
    }

    let diff_var = JSON.parse(localStorage.difficult);
    let diff_arr = diff_var;
    if (withromanji.includes(language)) {
        a = english[i];
        b = otherlang[i];
        c = romaji[i];
        z = [a, c, b];
    }
    else {
        a = english[i];
        b = otherlang[i];
        z = [a, b];
    }

    if (document.getElementById("checkbox").checked) {
        if (diff_var != []) {
            if (!diff_var.some(arr => JSON.stringify(arr) === JSON.stringify(z))) {
                diff_arr.push(z);
                localStorage.setItem("difficult", JSON.stringify(diff_arr));
                console.log("Iteam added!");
            }
            else {
                console.log("item already exists!");
            }

        }
        else {
            diff_arr = [z];
            localStorage.setItem("difficult", JSON.stringify(diff_arr));
            console.log("First Item added!");
        }
    }
    else {
        let z_as_string = JSON.stringify(z);

        let foundIndex = -1;

        diff_arr.forEach((arr, index) => {
            if (JSON.stringify(arr) === z_as_string) {
                foundIndex = index;
            }
        });

        if (foundIndex !== -1) {
            diff_arr.splice(foundIndex, 1);
            localStorage.setItem("difficult", JSON.stringify(diff_arr));
            console.log("Item removed!");
        }


    }
}

function uncheck_diff() {
    if (localStorage.getItem('difficult') !== null) {
        var isdiff = false;
        if (withromanji.includes(language)) {
            a = english[i];
            b = otherlang[i];
            c = romaji[i];
            z = [a, c, b];
        }
        else {
            a = english[i];
            b = otherlang[i];
            z = [a, b];
        }
        let diff_var = JSON.parse(localStorage.difficult);
        if (checkLSV('difficult')) {
            isdiff = diff_var.some(arr => JSON.stringify(arr) === JSON.stringify(z));
        }
        else {
            isdiff = false;
        }

        if (isdiff) {
            document.getElementById('checkbox').checked = true;
        }
        else {
            document.getElementById('checkbox').checked = false;
        }
    }

}


function langanddiv() {
    let a = document.getElementById("Lang_name").innerHTML;
    a = a.trim();
    let temp1 = a.split(" ");
    let language = temp1[0];
    let temp2 = temp1[1];
    let temp3 = temp2.split("(");
    let temp4 = temp3[1].slice(0, -1);
    let division = temp4;
    return [language, division];
}



