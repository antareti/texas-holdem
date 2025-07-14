// Нарды: Упрощённая логика
const canvas = document.getElementById('board');
const ctx = canvas?.getContext('2d');
let dice1 = 0;
let dice2 = 0;

function drawBoard() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Фон
  ctx.fillStyle = '#f9e4b7';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Пункты
  for (let i = 0; i < 12; i++) {
    drawTriangle(i * 66, 0, i % 2 === 0 ? 'black' : 'brown', true);
    drawTriangle(i * 66, 400, i % 2 === 0 ? 'black' : 'brown', false);
  }

  // Простая фишка игрока
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(33, 33, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function drawTriangle(x, y, color, top) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 66, y);
  ctx.lineTo(x + 33, top ? 150 : 250);
  ctx.closePath();
  ctx.fill();
}

function rollDice() {
  dice1 = Math.ceil(Math.random() * 6);
  dice2 = Math.ceil(Math.random() * 6);
  document.getElementById('dice-result').innerText = `🎲 ${dice1} + ${dice2}`;
}

if (canvas) drawBoard();