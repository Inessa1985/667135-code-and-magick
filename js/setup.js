'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARDS_COUNT = 4;
var SYMBOL_COUNT = 2;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var wizardSetup = setup.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var fireball = setup.querySelector('.setup-fireball-wrap');
var fireballInput = setup.querySelector('input[name="fireball-color"]');

// Функция получения случайного элемента
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};

// Функция создания похожего персонажа
var createWizardData = function () {
  var listFeature = {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR),
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


similarListElement.appendChild(creatList(WIZARDS_COUNT)); // Добавляем фрагмент с похожими волшебниками в нужный блок
setup.querySelector('.setup-similar').classList.remove('hidden'); // Показываем блок с похожими волшебниками


// Взаимодействие кнопок открытия и закрытия .setup
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.style.left = '';
  setup.style.top = '';

  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


// Валидация формы
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < SYMBOL_COUNT) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});


// Изменение цвета глаз, плащей и фаерболов при нажатии на персонажи
wizardCoat.addEventListener('click', function () {
  var color = getRandomElement(COAT_COLOR);
  wizardCoat.style.fill = color;
  wizardCoatInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getRandomElement(EYES_COLOR);
  wizardEyes.style.fill = color;
  wizardEyesInput.value = color;
});

fireball.addEventListener('click', function () {
  var color = getRandomElement(FIREBALL_COLORS);
  fireball.style.background = color;
  fireballInput.value = color;
});
