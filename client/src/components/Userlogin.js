import React, { Component } from "react";
import SignIn from "../pages/Signup";
import LogIn from "../pages/Login";
import { Modal, Button } from "react-bootstrap";
import $ from "jquery";

class UserLogin extends Component {

	state = {
		showModal: false
	}

	componentDidMount() {
		this.setState({ showModal: false });
	}

  close() {
    //this.setState({ showModal: false });
    $("#loginModal").hide();
  }

  open() {
    this.setState({ showModal: true });
  }

  signIn = event => {
  	const signDiv = document.getElementById("signIn");
  	const logDiv = document.getElementById("logIn");
  	const signInLink = document.getElementById("signInLink")
	signDiv.style.display = "block";
	logDiv.style.display = "none";
	signInLink.style.display = "none";  		
  }   
  render() {
    return (

	  	<div id="loginModal">

		  <Modal.Dialog show={this.state.showModal} >
			      <Modal.Header>
			        <button type="button" className="close" data-dismiss="modal" onClick={this.close}>&times;</button>
			        <h4 className="modal-title">Log In</h4>
			      </Modal.Header>
			      <Modal.Body>
			        <SignIn />
			        <LogIn />
			        <a id="signInLink" onClick={this.signIn}>Sign Up</a>
			      </Modal.Body>
			      <Modal.Footer>
			        <button className="btn btn-default" data-dismiss="modal" onClick={this.close}>Close</button>
			      </Modal.Footer>
		  </Modal.Dialog>

	  	</div>
	  )
	}
}
export default UserLogin;