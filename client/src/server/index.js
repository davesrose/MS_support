//setup stuff

//if(process.env.NODE_ENV == 'production'){
	var app = require('http').createServer()
//} else {
	//var app = require('http').createServer()
//}
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231
//const PORT = process.env.PORT || 3001

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})
// var express = require("express");
// const server = express()
//   .use((req, res) => require('./SocketManager') )
//   .listen(3231, () => console.log(`Listening on ${ PORT }`));
// const io = socketIO(server);
// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });