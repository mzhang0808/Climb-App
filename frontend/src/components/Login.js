// Login.js
// Logs a user in

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Login extends Component {

  // Set state
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      data: null,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // Modify state
  onChangeHandler(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({[key]: value});
  }

  // Upon submission, call API
  onSubmitHandler(event) {
    event.preventDefault();
    let url = "https://cs48-climb-backend.herokuapp.com/users/" + this.state.username;
    axios.get(url).then(response => this.setState({data: response.status}));

    if(this.state.data === 200) {
      localStorage.setItem('username', this.state.username);
      alert('Welcome, ' + localStorage.getItem('username') + '!');
    }
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form onSubmit={this.onSubmitHandler}>
                <div class="form-group">
                  <label>Username</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    name="username" 
                    placeholder="Username" 
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    name="password" 
                    placeholder="Password" 
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg">Log In <i class="fa fa-hand-rock"></i></button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};