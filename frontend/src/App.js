// App.js
// Routes to all other components

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import other components
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Competitions from './components/Competitions';
import LogScores from './components/LogScores';
import ViewScores from './components/ViewScores';


export default class App extends Component {
  render() {
    // return router
    return <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/competitions" component={Competitions}></Route>
        <Route path="/scores/log" component={LogScores}></Route>
        <Route path="/scores/view" component={ViewScores}></Route>
      </Switch>
    </Router>
  }
}
