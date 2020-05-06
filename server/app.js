const express = require('express')();
const http = require('http').Server(express);
const socketIO = require('socket.io')(http);

let position = {
  x: 200,
  y: 200
}

socketIO.on('connection', socket => {
  socket.emit('position', position);
  socket.on('move', data => {
    switch(data) {
      case 'left': position.x -= 5;
        socketIO.emit('position', position)
      break;
      case 'right': position.x += 5;
        socketIO.emit('position', position)
      break;
      case 'up': position.y -= 5;
        socketIO.emit('position', position)
      break;
      case 'down': position.y += 5;
        socketIO.emit('position', position)
      break;
    }
  })
});

http.listen(3000, () => {
  console.log('Listening at :3000....');
});
