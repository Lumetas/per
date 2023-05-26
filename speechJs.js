function sp (){


 var recognizer = new webkitSpeechRecognition();

  // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
  recognizer.interimResults = true;

  // Какой язык будем распознавать?
  recognizer.lang = 'ru-Ru,en-En';

  // Используем колбек для обработки результатов
  recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
      document.getElementById('mush').innerHTML = result[0].transcript;
      document.getElementById('speechInput').innerHTML = result[0].transcript;
    } else {
      document.getElementById('mush').innerHTML = result[0].transcript;
    }
  };

  recognizer.start();


}
