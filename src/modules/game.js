// API base URL
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
// Endpoint Paths
const gamesEndpoint = 'games/';
const scoresEndpoint = '/scores/';

// New game with the given name
const createGame = async (name) => {
  const response = await fetch(apiUrl + gamesEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  const data = await response.json();
  const gameId = data.result.split(':')[1].trim();
  return gameId; // return the gameId
};

// Get all scores for the game with the given ID
const getScores = async (gameId) => {
  const response = await fetch(apiUrl + gamesEndpoint + gameId + scoresEndpoint);
  const data = await response.json();
  return data.result;
};

// Add a new score for the game with the given ID
const addScore = async (gameId, user, score) => {
  const response = await fetch(apiUrl + gamesEndpoint + gameId + scoresEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data.result;
};

export { createGame, getScores, addScore };