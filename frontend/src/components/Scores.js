// Scores.js
// outputs table of scores

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Competitions extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test'
    }
    this.getScores = this.getScores.bind(this);
  }

  // upon button click, call API to get list of scores
  getScores() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <button class="btn btn-default btn-lg" onClick={this.getScores}>Get Scores</button>
        <p>{this.state.data}</p>
      </>
    );
  }
};
