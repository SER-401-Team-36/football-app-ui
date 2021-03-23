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
import AccountPage from './Pages/Login_Signup/Signup';
import SignoutPage from './Pages/Login_Signup/Signup';

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
          <AuthenticatedRoute
            exact
            path="/ViewPlayers"
            component={ViewPlayers}
          />
          <AuthenticatedRoute
            exact
            path="/ViewAnalytics"
            component={ViewAnalytics}
          />
          <AuthenticatedRoute
            exact
            path="/Draft"
            component={ViewDraft}
          />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route
            exact
            path="/ForgotPassword"
            component={ForgotPassword}
          />
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
