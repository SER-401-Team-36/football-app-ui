import './App';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ViewAnalytics from './Pages/Analytics';
import ViewPlayers from './Pages/Players';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ViewPlayers} />{' '}
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
