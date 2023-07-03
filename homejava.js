
setInterval(hide_loading, 2000);

function hide_loading() {
    document.getElementById('loading-back').style.display = "none";
    document.getElementById('loading').style.display = "none";
}

function word_goal_win() {
    document.getElementById('set_wrd_goal').style.display = "block";
}

function close_word_goal_win() {
    document.getElementById('set_wrd_goal').style.display = "none";
}

