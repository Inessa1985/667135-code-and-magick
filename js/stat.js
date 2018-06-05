'use strict';

//Константы
var CLOUD_WIDTH = 420;  //Ширина и Высота облака
var CLOUD_HEIGHT = 270; //Ширина и Высота облака
var CLOUD_X = 100;      //Координата облака X
var CLOUD_Y = 10;       //Координата облака Y
var GAP = 10;           //Шаг
var FONT_GAP = 16;      //Высота сообщения
var BAR_WIDTH = 40;     //Ширина столбца
var BAR_HEIGHT = 150;   //Высота столбца
var BAR_GAP = 50;       //Расстояние между столбцами

//Переменные
var randomColor = 0;
var maxElement = 0;
var maxTime = 0;


//Функция для отрисовки облака
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

//Максимальное время
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.floor(maxElement);
};


window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)'); //Тень от облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); //Прямоугольное облако

  //Текст сообщения на облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 );
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);

  var maxTime = getMaxElement(times);

  //Имена и время игроков
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'bottom';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
    randomColor = 'rgba' + '(' + '15, ' + '82, ' + '186, ' + String(0.3 + i / 10) + ')';
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomColor;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + 2 * FONT_GAP + 4 * GAP + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
