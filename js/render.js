'use strict';

(function () {

  window.render = {};

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Функция создания DOM-элемента волшебника на основе объекта с данными
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // Добавляем имена магов
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat; // Добавляем цвет плащей
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes; // Добавляем цвет глаз

    return wizardElement;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

})();
