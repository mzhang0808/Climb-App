// SignUp.js
// Form to log in
// Fields:
// Username
// Password

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class SignUp extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test'
    }
    this.signUp = this.signUp.bind(this);
  }

  // upon button click, call API to get a list of competitions
  signUp() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Username" required/>
                </div>
                <div class="form-group">
                  <label for="password1">Password</label>
                  <input type="password" class="form-control" id="password1" placeholder="Password" required/>
                </div>
                <div class="form-group">
                  <label for="password2">Confirm Password</label>
                  <input type="password" class="form-control" id="password2" placeholder="Password" required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg" onClick={this.logIn}>Sign Up <i class="fa fa-hand-rock"></i></button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};
