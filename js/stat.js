'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; //
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.floor(maxElement);
};

var fillPlayerText = function (ctx, names, times, maxAmountText, indexText) {
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'bottom';
  ctx.fillText(names, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * indexText, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
  ctx.fillText(Math.round(times), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * indexText, CLOUD_Y + 2 * FONT_GAP + 4 * GAP + (BAR_HEIGHT - (BAR_HEIGHT * times) / maxAmountText));
};

var fillPlayerBar = function (ctx, times, maxAmountBar, indexBar) {
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * indexBar, CLOUD_Y + 2 * FONT_GAP + 4 * GAP + (BAR_HEIGHT - (BAR_HEIGHT * times) / maxAmountBar), BAR_WIDTH, (BAR_HEIGHT * times) / maxAmountBar);
};

var randomColor = function (names) {
  return (names === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba' + '(' + '15, ' + '82, ' + '186, ' + Math.random() + ')';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)'); // Тень от облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // Прямоугольное облако

  // Текст сообщения на облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    fillPlayerText(ctx, names[i], times[i], maxTime, i); // Имена и статистика (время) игроков
    ctx.fillStyle = randomColor(names[i]); // Цвета гистограмм
    fillPlayerBar(ctx, times[i], maxTime, i); // Отрисовка гистограмм игроков
  }
};
