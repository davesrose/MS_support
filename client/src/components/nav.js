import React, { Component } from "react";
import UserLogin from "./Userlogin";
import $ from "jquery";

class Nav extends Component {

  hideSignIn = event => {
    $("#loginModal").show();
    const signDiv = document.getElementById("signIn");
    const logDiv = document.getElementById("logIn");
    signDiv.style.display = "none";
    logDiv.style.visibility = "block";
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
          <div className="logIn" id="logInBttn" data-toggle="modal" data-target="#loginModalBox" onClick={this.hideSignIn}><p>Log In</p></div>
          <UserLogin />
      </nav>
    )
  }
}
export default Nav;

// data-toggle="modal" data-target="#loginModal"