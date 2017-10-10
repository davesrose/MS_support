import React, { Component } from "react";
import UserLogin from "./Userlogin";

class Nav extends Component {
  hideSignIn = event => {
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
            <li>About MS</li>
            <li>Info</li>
            <li>Events</li>
            <li className="end">Profile</li>
          </ul>
          <div className="clear"></div>
          <div className="logIn" data-toggle="modal" data-target="#loginModal" onClick={this.hideSignIn}><p>Log In</p></div>
          <UserLogin />
      </nav>
    )
  }
}
export default Nav;