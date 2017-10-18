import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import aboutMS from "./about-ms";
import aboutSite from "./about-site";
import events from "./events"
import profile from "./profile"
import Nav from "../components/nav";
import Footer from "../components/footer"
import NoMatch from "./NoMatch";
import Layout from "../components/Layout"
//import API from "../utils/API";

const Main = () =>
	<Router>
    	<div>
            <Layout />
            <div className="mainContainer">
    		<Nav />
    		<Switch>
        		<Route exact path="/" component={aboutMS} />
        		<Route exact path="/about" component={aboutSite} />
        		<Route exact path="/events" component={events} />
                <Route exact path="/profile" component={profile} />
        		<Route component={NoMatch} />
    		</Switch>
            </div>
            <Footer /> 		
    	</div>       
	</Router>;

export default Main;
