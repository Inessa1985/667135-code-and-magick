'use strict';

(function () {

  var DEBOUNCE_INTERVAL = 300; // ms
  var lastTimeout = null;


  window.debounce = function (fun) {

    return function () {
      var args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };

})();
