import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                <Route exact path="/" component={ViewAnalytics} /> 
                <Route exact path="/ViewPlayers" component={ViewPlayers} />
                <Route exact path="/ViewAnalytics" component={ViewAnalytics} />
            </Switch>
            <Footer />
        </Router>
    }
}


export default App;
