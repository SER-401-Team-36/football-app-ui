import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Header from "./Header"
import ViewPlayers from "./ViewPlayers";
import ViewAnalytics from "./ViewAnalytics";
import Footer from "./footer";

class App extends Component {
    render() {
        return <Router>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={ViewPlayers} /> //Starting Page
                <Route exact path="/ViewPlayers" component={ViewPlayers} /> //View Players Redirect
                <Route exact path="/ViewAnalytics" component={ViewAnalytics} /> //View Analytics Redirect
            </Switch>
            <Footer />
        </Router>
    }
}


export default App;
