'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setup = document.querySelector('.setup');

  // Функция создания похожего персонажа
  var createWizardData = function () {
    var listFeature = {
      name: window.library.getRandomElement(WIZARD_NAMES) + ' ' + window.library.getRandomElement(WIZARD_SURNAME),
      coatColor: window.library.getRandomElement(COAT_COLOR),
      eyesColor: window.library.getRandomElement(EYES_COLOR),
    };

    return listFeature;
  };

  // Функция создания DOM-элемента волшебника на основе объекта с данными
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // Добавляем имена магов
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor; // Добавляем цвет плащей
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor; // Добавляем цвет глаз

    return wizardElement;
  };

  // Функция заполнения фрагмента DOM-элементами на основе массива с похожими волшебниками
  var creatList = function (wizardsCount) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsCount; i++) {
      fragment.appendChild(renderWizard(createWizardData()));
    }

    return fragment;
  };


  // Добавляем фрагмент с похожими волшебниками в нужный блок
  similarListElement.appendChild(creatList(WIZARDS_COUNT));

  // Показываем блок с похожими волшебниками
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
