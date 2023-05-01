var i = 0;
var divisions = ['Beginner', 'Moderate', 'Advanced'];

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

// Division change
var pre_div = divisions[div_num - 1];
var nxtdiv = divisions[div_num + 1];
document.getElementById('ndivision').innerHTML = nxtdiv;
document.getElementById('pdivision').innerHTML = pre_div;

if (i == english.length - 1 && div_num < 2) {
  document.getElementById('nextdivision').style.display = "block";
}
else {
  document.getElementById('nextdivision').style.display = "none";
}
if (i == 0 && div_num > 0) {
  document.getElementById('prevdivision').style.display = "block";
}
else {
  document.getElementById('prevdivision').style.display = "none";
}

function nextdiv() {
  

}

function prevdiv() {

}

