import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";

//within containg element, include router elements for being able to handle router calls
const App = () =>
  <Router>
    <div>
      <Switch>
      	<Route exact path="/" component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;


export default App;