import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMS from "./about-ms";
import AboutSite from "./about-site";
import Events from "./events"
import Profile from "./profile"
import Nav from "../components/nav";
import NoMatch from "./NoMatch";
//import API from "../utils/API";

const Main = () =>
	<Router>
    	<div>
    		<Nav />
    		<Switch>
        		<Route exact path="/" component={AboutMS} />
        		<Route exact path="/about" component={AboutSite} />
        		<Route exact path="/events" component={Events} />
                <Route exact path="/profile" component={Profile} />
        		<Route component={NoMatch} />
    		</Switch> 		
    	</div>
	</Router>;

export default Main;
