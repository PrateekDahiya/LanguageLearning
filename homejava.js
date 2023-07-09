

setInterval(hide_loading, 4000);
function hide_loading() {
    document.getElementById('loading-back').style.display = "none";
    document.getElementById('loading').style.display = "none";
    diff_count();
}
let containerlist = document.getElementById("container_list");
let radioinputs = document.getElementsByClassName("radio-inputs")[0];
console.log(radioinputs);
radioinputs.addEventListener("mouseover", showList);
containerlist.addEventListener("mouseover", showList);
var a, b;
containerlist.addEventListener("mouseout", function () {
    a = setTimeout(hideList, 1000);
});
radioinputs.addEventListener("mouseout", function () {
    b = setTimeout(hideList, 1000);
});

function showList() {
    radioinputs.style.display = "flex";
    clearTimeout(a);
    clearTimeout(b);
}

function hideList() {
    radioinputs.style.display = "none";
}


function diff_count() {
    var difflength = JSON.parse(localStorage.getItem("difficult")).length;
    document.getElementById("diff_count_num").innerHTML = difflength;
}


function word_goal_win() {
    document.getElementById('set_wrd_goal').style.display = "block";
}

function close_word_goal_win() {
    document.getElementById('set_wrd_goal').style.display = "none";
}

function goto_diff() {
    open("difficult.html", "_self");
}





