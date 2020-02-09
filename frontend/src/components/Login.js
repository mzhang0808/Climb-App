// Login.js
// Form to log in
// Fields:
// Username
// Password

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Login extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test'
    }
    this.login = this.login.bind(this);
  }

  // upon button click, call API to get a list of competitions
  login() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Username" required/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" required/>
          </div>
          <button type="submit" class="btn btn-default btn-lg" onClick={this.login}>Log In <i class="fa fa-hand-rock"></i></button>
        </form>
        <br />
        <form action="/signup">
          <div class="form-group">
            <p for="username">Don't have an account?</p>
            <button type="submit" class="btn btn-default btn-lg" onClick={this.login}>Sign Up <i class="fa fa-hand-rock"></i></button>
          </div>
        </form>
      </>
    );
  }
};
