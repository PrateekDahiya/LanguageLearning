var i = 0;
function speak(b) {
  var msg = new SpeechSynthesisUtterance(otherlang[i]);
  msg.lang = b;
  window.speechSynthesis.speak(msg);
}
function nextword() {
  i = i + 1;
  document.getElementById("lang").innerHTML = otherlang[i];
  document.getElementById("eng").innerHTML = english[i];
}

