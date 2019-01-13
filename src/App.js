import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import MainPage from './components/MainPage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import LogoutPage from './components/logout/LogoutPage';
import './App.css';
import TopBar from './components/layout/TopBar';

function configureHistory() {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('We are in home screen');
    return createHashHistory();
  } else {
    console.log('We are in regular browser');
    return createBrowserHistory();
  }
}
const history = configureHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/todays" component={MainPage} />
            <Route exact path="/" render={() => <Redirect to="/todays" />} />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
