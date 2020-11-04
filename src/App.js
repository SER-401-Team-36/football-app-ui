import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import TopPlayerFeed from "./TopPlayerFeed";
import ViewPlayers from "./ViewPlayers";
import ViewAnalytics from "./ViewAnalytics";

class App extends Component {
    render() {
        return <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={TopPlayerFeed} /> //Starting Page
                <Route exact path="/ViewPlayers" component={ViewPlayers} /> //View Players Redirect
                <Route exact path="/ViewAnalytics" component={ViewAnalytics} /> //View Analytics Redirect
            </Switch>
        </Router>
    }

}


export default App;