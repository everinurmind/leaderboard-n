// Import
import './style.css';
import { createGame } from './modules/game.js';
import { refreshScores, submitScore } from './modules/ui.js';
import { setGameId } from './modules/gameId.js';

const gameName = 'My Awesome Game';

// DOM elements
const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');
const nameInput = document.getElementById('input-name');
const scoreInput = document.getElementById('input-score');

// Game and UI
createGame(gameName).then((id) => {
  setGameId(id);
  refreshScores();
});

// Refresh button click event
refreshBtn.addEventListener('click', () => {
  refreshScores();
});

// Submit button click event
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const user = nameInput.value.trim();
  const score = parseInt(scoreInput.value.trim(), 10);
  if (user && score) {
    submitScore(user, score);
    nameInput.value = '';
    scoreInput.value = '';
    refreshScores();
  }
});

// Export
export default createGame;