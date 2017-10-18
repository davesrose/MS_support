import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'
const http = require('https');

// Create an HTTP server
const srv = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
srv.on('upgrade', (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  socket.pipe(socket); // echo back
});

// now that server is running
srv.listen(3231, 'https://ms-connect-finalproject.herokuapp.com', () => {

  // make a request
  const options = {
    port: 3231,
    hostname: 'https://ms-connect-finalproject.herokuapp.com',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket'
    }
  };
//if(process.env.NODE_ENV == 'production'){
	const socketUrl = "https://ms-connect-finalproject.herokuapp.com"
//} else {
	//const socketUrl = "http://localhost:3231"
//}
export default class Layout extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	socket:null,
	  	user:null
	  };
	}

	componentWillMount() {
		this.initSocket(socketUrl)
	}

	/*
	*	Connect to and initializes the socket.
	*/
	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			console.log("connected");
		})
		
		this.setState({socket})
	}

	/*
	* 	Sets the user property in state 
	*	@param user {id:number, name:string}
	*/	
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}

	/*
	*	Sets the user property in state to null.
	*/
	logout = ()=>{
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null})

	}


	render() {
		const { title } = this.props
		const { socket, user } = this.state
		return (
			<div className="container containerChat">
				{
					!user ?	
					<LoginForm socket={socket} setUser={this.setUser} />
					:
					<ChatContainer socket={socket} user={user} logout={this.logout}/>
				}
			</div>
		);
	}
}
