function speak(a) {
  var msg = new SpeechSynthesisUtterance(a);
  msg.lang = "fr"
  window.speechSynthesis.speak(msg);
}

