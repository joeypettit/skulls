const express = require('express');
const app = express();
const http = require("http");
const {Server} = require('socket.io');

// CORS
const cors = require("cors");
app. use(cors());

// create server
const server = http.createServer(app);

// Socket.io server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
})

io.on('connection', (socket)=>{
  console.log('user connected', socket.id);
  socket.on('send-message', (data)=>{
    socket.broadcast.emit('recieve-message', data);
  })
})

const bodyParser = require('body-parser');


// Route includes
const gameRouter = require('./routes/game.route');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/api/game', gameRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
