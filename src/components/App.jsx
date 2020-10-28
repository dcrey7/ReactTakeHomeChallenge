import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import Home from "./Home";

import Mentoring from "./Website/Mentoring";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Mentoring} />
            <Route exact path={ROUTES.LANDING} component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
