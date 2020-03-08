// ViewScores.js
// outputs tablulated score data

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class ViewScores extends Component {

  // Set state
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      competition: null,
      data: []
    }

    this.scores = [];
    this.table = [];

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // Upon submission, call API
  onSubmitHandler(event) {
    event.preventDefault();
    
  }

  render() {
    let url = "https://cs48-climb-backend.herokuapp.com/scores/" + localStorage.getItem('username') + "/" + localStorage.getItem('comp');
    axios.get(url).then(response => this.setState({data: response.data}));
    
    this.scores = [];

    for(let i = 0; i < Math.min(this.state.data.length, 3); i++) {
      let score = this.state.data[i];
      this.scores.push(score);
    }

    this.finalScore = 0.0;
    for(let i = 0; i < Math.min(this.state.data.length, 3); i++) {
      let score = this.scores[i];
      this.finalScore += score[0] - score[1] / 100.0;
    }

    this.table = this.scores.map((item, key) => 
      <tr>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    );
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3>Top 3 Routes</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th>Route #</th>
                    <th>Attempts</th>
                  </tr>
                </thead>
                <tbody>
                  {this.table}
                </tbody>
              </table>
              <h3>Final Score: {this.finalScore.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
};
