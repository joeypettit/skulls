const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const newGame = require('../gameFunctions/newGame');
/**
 * GET route template
 */
router.get('/new/:numOfPlayers', (req, res) => {
  const numOfPlayers = req.params.numOfPlayers;
  const gameObj = newGame(numOfPlayers);
  res.send(gameObj);

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
