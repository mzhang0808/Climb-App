// NavBar.js
// outputs navigation bar on all pages

import React, {Component} from 'react';

export default class HomePage extends Component {
  render () {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="/" class="navbar-brand"><strong>Climb!</strong></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-nav-demo">
          <ul class="nav navbar-nav">
            <li><a href="competitions">Competitions</a></li>
            <li><a href="scores">Scores</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="signup">Sign Up <i class="fa fa-user-plus"></i></a></li>
            <li><a href="login">Log In <i class="fa fa-user"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}