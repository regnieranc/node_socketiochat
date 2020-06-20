let express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    console.log('asd')
    res.send('<h1 style="color: red;">HOLA</h1>')
});

io.on('connection', (socket) => {
  socket.on('mensaje', mensaje => {
  	mensaje.fecha = new Date()
      io.emit('mensaje', mensaje)
  })

  socket.on('escribiendo', () => {
      io.broadcast.emit('escribiendo', 'asd')
  })
});

http.listen(process.env.PORT || 4000, () => {
  console.log('listening on *:3000');
});