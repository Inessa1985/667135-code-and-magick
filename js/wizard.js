'use strict';

(function () {

  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var setup = document.querySelector('.setup');
  var inputCoatColor = setup.querySelector('input[name=coat-color]');
  var inputEyesColor = setup.querySelector('input[name=eyes-color]');


  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.library.getRandomElement(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    inputCoatColor.value = newColor;
    window.setup.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.library.getRandomElement(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    inputEyesColor.value = newColor;
    window.setup.onEyesChange(newColor);
  });

})();
