const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Route includes
const gameRouter = require('./routes/game.route');
const playerRouter = require('./routes/player.route');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/api/game', gameRouter);
app.use('/api/player', playerRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
