'use strict';

(function () {

  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setup = document.querySelector('.setup');
  var wizardSetup = setup.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var fireballInput = setup.querySelector('input[name="fireball-color"]');

  // Изменение цвета глаз, плащей и фаерболов при нажатии на персонажи
  wizardCoat.addEventListener('click', function () {
    var color = window.library.getRandomElement(COAT_COLOR);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.library.getRandomElement(EYES_COLOR);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  });

  fireball.addEventListener('click', function () {
    var color = window.library.getRandomElement(FIREBALL_COLORS);
    fireball.style.background = color;
    fireballInput.value = color;
  });

})();
