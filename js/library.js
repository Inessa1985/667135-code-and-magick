'use strict';

(function () {
  window.library = {};

  // Функция получения случайного элемента
  window.library.getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  };

  // Перетасовывает массив
  window.library.getShuffleArray = function (array) {
    for (var i = 0; i < array.length - 1; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

})();
