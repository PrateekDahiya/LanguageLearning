let english = [' Hello!', ' How are you?', ' My name is Sophie.', ' What is your name?', ' I am happy.', ' I am tired.', ' Thank you very much.', " You're welcome.", ' Yes, I understand.', " No, I don't understand.", ' Excuse me.', ' Goodbye!', " I don't know.", ' I like music.', " I don't like vegetables.", ' What time is it?', ' How much does it cost?', ' I am going to the cinema.', " It's nice weather today.", ' I am hungry.'];
let otherlang = ['Bonjour! ', 'Comment ça va? ', "Je m'appelle Sophie. ", "Comment t'appelles tu? ", 'Je suis content(e). ', 'Je suis fatigué(e). ', 'Merci beaucoup. ', 'De rien. ', 'Oui, je comprends. ', 'Non, je ne comprends pas. ', 'Excusez moi. ', 'Au revoir! ', 'Je ne sais pas. ', "J'aime la musique. ", "Je n'aime pas les légumes. ", 'Quelle heure est il? ', 'Combien ça coûte? ', 'Je vais au cinéma. ', "Il fait beau aujourd'hui. ", "J'ai faim. "];
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

