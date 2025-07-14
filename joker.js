const grid = document.getElementById('card-grid');
const message = document.getElementById('message');

let jokerIndex = Math.floor(Math.random() * 20);
let gameEnded = false;

function createCard(index) {
  const card = document.createElement('div');
  card.className = 'card bg-white text-black flex items-center justify-center cursor-pointer';
  card.innerText = '🂠';
  card.onclick = () => {
    if (gameEnded || card.dataset.revealed === 'true') return;
    card.dataset.revealed = 'true';
    if (index === jokerIndex) {
      card.innerText = '🃏';
      card.classList.add('bg-red-600', 'text-white');
      message.innerText = 'Ты нашёл Джокера! 🎉';
      gameEnded = true;
    } else {
      card.innerText = '❌';
      card.classList.add('bg-gray-500', 'text-white');
    }
  };
  return card;
}

function setupGame() {
  grid.innerHTML = '';
  message.innerText = '';
  gameEnded = false;
  jokerIndex = Math.floor(Math.random() * 20);
  for (let i = 0; i < 20; i++) {
    grid.appendChild(createCard(i));
  }
}

function resetGame() {
  setupGame();
}

setupGame();