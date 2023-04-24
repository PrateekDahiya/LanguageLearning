var i = 0;
var divisions = ['Beginner', 'Moderate', 'Advanced'];
var levels = ['Level 1', 'Level 2', 'Level 3'];

document.getElementById('backward').style.display = "none";
function speak(b) {
  var msg = new SpeechSynthesisUtterance(otherlang[i]);
  msg.lang = b;
  window.speechSynthesis.speak(msg);
}
function speakeng() {
  var msg = new SpeechSynthesisUtterance(english[i]);
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
}
function nextword() {
  if (i < english.length - 1) {
    i = i + 1;
    document.getElementById("lang").innerHTML = otherlang[i];
    document.getElementById("eng").innerHTML = english[i];
    document.getElementById("romaji").innerHTML = romaji[i];
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
  if (i > 0) {
    i = i - 1;
    document.getElementById("lang").innerHTML = otherlang[i];
    document.getElementById("eng").innerHTML = english[i];
    document.getElementById("romaji").innerHTML = romaji[i];
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

function change_level(level) {
  for (let j = 0; j < level.length; j++) {
    if (level == level[j]) {
      if (i == english.length - 1) {

      }
    }
  }

}

function change_division(division) {
  for (let j = 0; j < division.length; j++) {
    if (division == division[j]) {
      if (i == english.length - 1) {
        
      }
    }
  }
}

