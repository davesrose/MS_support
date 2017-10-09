import React from "react";

const Nav = props =>
  <nav>
    <div className="Name">MS Connect</div>
      <ul className="mainNavigation">
        <li>About MS</li>
        <li>Info</li>
        <li>Events</li>
        <li className="end">Profile</li>
      </ul>
      <div className="clear"></div>
      <div className="logIn"><p>Log In</p></div>
  </nav>
export default Nav