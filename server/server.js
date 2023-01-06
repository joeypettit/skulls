const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

// CORS
const cors = require("cors");
app.use(cors());

// create server
const server = http.createServer(app);

// Socket.io server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const bodyParser = require("body-parser");

// import gameplay functions
const newGame = require("./gameFunctions/newGame");
let gameState = require("./gameState/gameState");
const getPlayerState = require("./gameFunctions/getPlayersState");
const newRound = require("./gameFunctions/newRound");

// on socket.io connection
io.on("connection", (socket) => {
  console.log("connected", socket.id);

  // listener: reset gamestate and send it back
  socket.on("new-game", () => {
    const gameState = newGame();
    socket.emit("update-gamestate", gameState);
  });

  socket.on("send-player-id", (id) => {
    console.log('player id is ', id);
  });
});

// Route includes
const gameRouter = require("./routes/game.route");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use("/api/game", gameRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
