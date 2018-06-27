'use strict';

(function () {
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setup = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');

  /*
  // Функция создания похожего персонажа
  var createWizardData = function () {
    var listFeature = {
      name: window.library.getRandomElement(WIZARD_NAMES) + ' ' + window.library.getRandomElement(WIZARD_SURNAME),
      coatColor: window.library.getRandomElement(COAT_COLOR),
      eyesColor: window.library.getRandomElement(EYES_COLOR),
    };

    return listFeature;
  };
  */

  // Функция создания DOM-элемента волшебника на основе объекта с данными
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // Добавляем имена магов
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat; // Добавляем цвет плащей
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes; // Добавляем цвет глаз

    return wizardElement;
  };

  /*
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
  */
  var onSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();
    window.library.getShuffleArray(wizards);

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: rgba(255, 50, 0, 0.7); top: 200px; left: 50%; transform: translateX(-50%); box-shadow: 0 0 50px rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 50, 0, 0.7); border-radius: 20px';
    node.style.position = 'fixed';
    node.style.padding = '50px 30px';
    node.style.fontfamily = 'Arial';
    node.style.fontSize = '24px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var removeSetup = function () {
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), removeSetup, onError);
    evt.preventDefault();
  });

  window.backend.load(onSuccess, onError);

})();
