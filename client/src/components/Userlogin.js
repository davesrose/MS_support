import React, { Component } from "react";
import SignIn from "../pages/Signup";
import LogIn from "../pages/Login";

class UserLogin extends Component {

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
	  <div className="modal fade" id="loginModal" role="dialog">
		  <div className="modal-dialog">

		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal">&times;</button>
		        <h4 className="modal-title">Log In</h4>
		      </div>
		      <div className="modal-body">
		        <SignIn />
		        <LogIn />
		        <a id="signInLink" onClick={this.signIn}>Sign Up</a>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>

		  </div>
	  </div>
	  )
	}
}
export default UserLogin;