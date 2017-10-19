import React, { Component } from "react";
import UserLogin from "./Userlogin";
import $ from "jquery";
import API from "../utils/API";

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      isLoginHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isLoginHidden: !this.state.isLoginHidden
    })

    //Either Logout or Log in Customers as needed
    if (document.getElementById("logInBttn").innerHTML === "<p>Log Out</p>"){
      $("#loginModal").hide();
      document.getElementById("logInBttn").innerHTML = "<p>Log In</p>";

      //Logout user
      API.logout()
        .then(res => {
        
        //Remove token from storage
        window.localStorage.setItem('token', "");

        window.location.href="/";
      })
      .catch(err => console.log(err));
    }
    // else{
    //   $("#loginModal").show();
    //   const signDiv = document.getElementById("signIn");
    //   const logDiv = document.getElementById("logIn");
    //   signDiv.style.display = "none";
    //   logDiv.style.visibility = "block";
    // }
  }

  hideSignIn = event => {
    
  }
  render() {

    return (
      <nav>
        <div className="Name">MS Connect</div>
          <ul className="mainNavigation">
            <a href="/"><li>About MS</li></a>
            <a href="/about"><li>Info</li></a>
            <a href="/events"><li>Events</li></a>
            <a href="/profile"><li>Profile</li></a>
          </ul>
          <div className="clear"></div>
          <div className="logIn" id="logInBttn" data-toggle="modal" data-target="#loginModalBox" onClick={this.toggleHidden.bind(this)}><p>Log In</p></div>
          {!this.state.isLoginHidden && <UserLogin />}
      </nav>
    )
  }
}
export default Nav;

// data-toggle="modal" data-target="#loginModal"