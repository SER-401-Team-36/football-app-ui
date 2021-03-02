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
import LoginPage from './Pages/Login_Signup/LoginPage';
import ForgotPassword from './Pages/Login_Signup/ForgotPassword';
import Signup from './Pages/Login_Signup/Signup';
import AccountPage from './Pages/Login_Signup/Signup';
import SignoutPage from './Pages/Login_Signup/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />{' '}
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
          <Route exact path="/LoginPage" component={LoginPage} />{' '}
          {/* Login Page Redirect */}
          <Route
            exact
            path="/ForgotPassword"
            component={ForgotPassword}
          />
          {''}
          {/* Forgot Password Redirect */}
          <Route exact path="/Signup" component={Signup} />
          {''}
          {/* Signup Redirect */}
          <Route
            exact
            path="/AccountPage"
            component={AccountPage}
          />{' '}
          {/* Account Page Redirect */}
          <Route
            exact
            path="/SignoutPage"
            component={SignoutPage}
          />{' '}
          {/* Signout Page Redirect */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
