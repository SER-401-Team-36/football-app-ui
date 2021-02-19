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
import Draft from './Pages/Draft/Draft';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />{' '}
          <Route exact path="/ViewPlayers" component={ViewPlayers} />{' '}
          <Route
            exact
            path="/ViewAnalytics"
            component={ViewAnalytics}
          />{' '}
          <Route exact path="/Draft" component={Draft} />{' '}
          <Route exact path="/LoginPage" component={LoginPage} />{' '}
          <Route
            exact
            path="/ForgotPassword"
            component={ForgotPassword}
          />
          {''}
          <Route exact path="/Signup" component={Signup} />
          {''}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
