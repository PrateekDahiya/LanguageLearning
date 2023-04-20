function speakHello() {
    var msg = new SpeechSynthesisUtterance('Hello');
    window.speechSynthesis.speak(msg);
  }
  