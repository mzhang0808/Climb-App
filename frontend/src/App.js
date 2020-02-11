// App.js
// Routes to other components

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import other components
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateCompetition from './components/CreateCompetition';
import JoinCompetition from './components/JoinCompetition';
import LogScores from './components/LogScores';
import ViewScores from './components/ViewScores';

export default class App extends Component {
  render() {
    // return Router
    return <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/competitions/create" component={CreateCompetition}></Route>
        <Route path="/competitions/join" component={JoinCompetition}></Route>
        <Route path="/scores/log" component={LogScores}></Route>
        <Route path="/scores/view" component={ViewScores}></Route>
      </Switch>
    </Router>
  }
}
