import './App.css';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AuthenticatedRoute from './Components/AuthenticatedRoute';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ViewAnalytics from './Pages/Analytics';
import ForgotPassword from './Pages/Login_Signup/ForgotPassword';
import LoginPage from './Pages/Login_Signup/LoginPage';
import Signup from './Pages/Login_Signup/Signup';
import ViewPlayers from './Pages/Players';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <AuthenticatedRoute
            exact
            path="/"
            component={ViewPlayers}
          />
          {/* Starting Page */}
          <AuthenticatedRoute
            exact
            path="/ViewPlayers"
            component={ViewPlayers}
          />
          {/* View Players Redirect */}
          <AuthenticatedRoute
            exact
            path="/ViewAnalytics"
            component={ViewAnalytics}
          />
          {/* View Analytics Redirect */}
          <Route exact path="/LoginPage" component={LoginPage} />
          {/* Login Page Redirect */}
          <Route
            exact
            path="/ForgotPassword"
            component={ForgotPassword}
          />
          {/* Forgot Password Redirect */}
          <Route exact path="/Signup" component={Signup} />
          {/* Signup Redirect */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
