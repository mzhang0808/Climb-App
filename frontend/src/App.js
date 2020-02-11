// App.js
// Routes to all other components

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import other components
import Home from './components/Home';
import Competitions from './components/Competitions';
import Scores from './components/Scores';
import Signup from './components/Signup';


export default class App extends Component {
  render() {
    // return router
    return <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/competitions" component={Competitions}></Route>
        <Route path="/scores" component={Scores}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  }
}
