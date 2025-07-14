const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function generateDeck() {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push(value + suit);
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}

function dealCards(deck, count) {
  return deck.splice(0, count);
}

function renderCards(containerId, cards) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let card of cards) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerText = card;
    container.appendChild(div);
  }
}

let deck = generateDeck();
let playerHand = dealCards(deck, 2);
let botHand = dealCards(deck, 2);
let communityCards = dealCards(deck, 5);

renderCards('player-cards', playerHand);
renderCards('bot-cards', ['🂠', '🂠']);
renderCards('community-cards', []);

let flopRevealed = false;

function fold() {
  alert("Ты сбросил. Побеждает бот.");
  location.reload();
}

function call() {
  if (!flopRevealed) {
    renderCards('community-cards', communityCards.slice(0, 3));
    flopRevealed = true;
  } else {
    renderCards('community-cards', communityCards);
    renderCards('bot-cards', botHand);
    alert("Финал! Победитель: случайный :)");
  }
}

function raise() {
  alert("Ты повысил ставку! (но бот пока не реагирует)");
}