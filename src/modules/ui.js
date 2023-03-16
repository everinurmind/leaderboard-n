import { getScores, addScore } from './game.js';
import { getGameId } from './gameId.js';

const gameId = getGameId();

// DOM elements
const scoresList = document.querySelector('.scores');

// Refresh the scores list
const refreshScores = async () => {
  scoresList.innerHTML = '';
  const scores = await getScores(gameId);
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
};

// Submit a new score
const submitScore = async (user, score) => {
  await addScore(gameId, user, score);
};

export { refreshScores, submitScore };