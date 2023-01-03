const express = require('express');
const router = express.Router();
let newGame = require('../gameFunctions/newGame');
let gameState = require('../gameState/gameState');

router.get('/new/', (req, res) => {
  gameState = newGame();
  res.send(gameState);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
