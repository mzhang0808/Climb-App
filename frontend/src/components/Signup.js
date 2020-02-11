// Scores.js
// outputs table of scores

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Signup extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.signup = this.signup.bind(this);
  }

  // upon button click, call API to get list of scores
  signup(event) {
    event.preventDefault();
    axios.post("https://cs48-climb-backend.herokuapp.com/users", {user_name: this.state.username, password: this.state.password})
     .then(response => console.log(response));
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
          <form onSubmit={this.signup}>
          <p>Enter your username:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your password:</p>
          <input
            type='text'
            name='password'
            onChange={this.myChangeHandler}
          />
          <input
            type='submit'
          />
          </form>
      </>
    );
  }
};
