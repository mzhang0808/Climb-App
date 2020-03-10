// NavBar.js
// outputs navigation bar on all pages

import React, { Component } from 'react';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.navItems = <>

    </>
    this.navItems = <></>
    this.loginNavItems = <>
      <li><a href="/signup">Sign Up <i class="fa fa-user-plus"></i></a></li>
      <li><a href="/login">Log In <i class="fa fa-user"></i></a></li>
    </>
  }

  logout() {
    localStorage.removeItem('username');
  }

  render() {
    if (localStorage.getItem('username') != null) {
      this.navItems = <>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Competitions<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/competitions/create">Create</a></li>
            <li><a href="/competitions/join">Join</a></li>
          </ul>
        </li>
        <li><a href="/scores/log">Log Routes</a></li>
        <li><a href="/scores/view">View Score</a></li>
      </>
      this.loginNavItems = <li><a href="/" onClick={this.logout}>Log Out <i class="fa fa-user"></i></a></li>
    }

    return (
      <nav class="navbar navbar-default navbar-fixed-top navbar-expand-lg">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand"><strong>Climb!</strong></a>
          </div>
          <div class="collapse navbar-collapse" id="bs-nav-demo">
            <ul class="nav navbar-nav">
              {this.navItems}
            </ul>
            <ul class="nav navbar-nav navbar-right">
              {this.loginNavItems}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}