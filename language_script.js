function speak(a) {
    var msg = new SpeechSynthesisUtterance(a);
    window.speechSynthesis.speak(msg);
  }
  