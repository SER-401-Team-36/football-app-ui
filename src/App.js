import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import TopPlayerFeed from "./TopPlayerFeed";
import ViewPlayers from "./ViewPlayers";

class App extends Component {
    render() {
        return <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={TopPlayerFeed} />
                <Route exact path="/ViewPlayers" component={ViewPlayers} />
            </Switch>
        </Router>
    }

}


export default App;