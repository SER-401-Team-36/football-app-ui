import './App';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ViewAnalytics from './Pages/Analytics';
import ViewPlayers from './Pages/Players';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ViewAnalytics} />{' '}
          {/* Starting Page */}
          <Route
            exact
            path="/ViewPlayers"
            component={ViewPlayers}
          />{' '}
          {/* View Players Redirect */}
          <Route
            exact
            path="/ViewAnalytics"
            component={ViewAnalytics}
          />{' '}
          {/* View Analytics Redirect */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
