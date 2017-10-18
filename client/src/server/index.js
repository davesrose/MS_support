//setup stuff

//if(process.env.NODE_ENV == 'production'){
	var app = require('https').createServer()
//} else {
	//var app = require('http').createServer()
//}
// var io = module.exports.io = require('socket.io')(app)
var io = require('ws').Server , wss = new WebSocketServer({port :3231}); 
const PORT = process.env.PORT || 3231
//const PORT = process.env.PORT || 3001

// io.configure(function () {  
//   io.set("transports", ["xhr-polling"]); 
//   io.set("polling duration", 10); 
// });

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