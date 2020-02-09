// Log.js
// outputs tablulated score data

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Scores extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test'
    }
    this.getScores = this.getScores.bind(this);
  }

  // upon button click, call API to view scores
  getScores() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <button class="btn btn-default btn-lg" onClick={this.getScores}>View Scores <i class="fa fa-hand-rock"></i></button>
        <p>{this.state.data}</p>
      </>
    );
  }
};
