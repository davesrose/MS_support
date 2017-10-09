import React, { Component } from "react";
import AboutMS from "./about-ms";
import Nav from "../components/nav"
//import API from "../utils/API";

class Main extends Component {
  render() {
    return (
    	<div>
    		<Nav />
    		<AboutMS />   		
    	</div>
    	)
	}
}

export default Main;
