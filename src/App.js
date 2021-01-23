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
import LoginPage from './Pages/Login_Signup/LoginPage';
import ForgotPassword from './Pages/Login_Signup/ForgotPassword';

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
          <Route
            exact
            path="/LoginPage"
            component={LoginPage}
          />{' '}
          {/* Login Page Redirect */}
          <Route
            exact
            path="/ForgotPassword"
            component={ForgotPassword}
            />{''}
            {/* Forgot Password Redirect */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
