'use strict';

(function () {
  window.library = {};

  // Функция получения случайного элемента
  window.library.getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  };

})();
