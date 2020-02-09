// Log.js
// outputs tablulated score data

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class LogScores extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      competition: null,
      problem: null,
      attempts: null,
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handleCompetition = this.handleCompetition.bind(this);
    this.handleProblem = this.handleProblem.bind(this);
    this.handleAttempts = this.handleAttempts.bind(this);
    this.logScores = this.logScores.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handleCompetition(event) {
    this.setState({competition: event.target.value});
  }

  handleProblem(event) {
    this.setState({problem: event.target.value});
  }

  handleAttempts(event) {
    this.setState({attempts: event.target.value});
  }

  // upon button click, call API to view scores
  logScores(event) {
    alert(this.state.username);
    axios.post("https://cs48-climb-backend.herokuapp.com/scores", {
      user_name: this.state.username,
      comp: this.state.competition
    });

    let url = "https://cs48-climb-backend.herokuapp.com/" + this.state.username + "/" + this.state.competition;
    axios.patch(url, {
      problem: this.state.problem,
      attempts: this.state.attempts
    })
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form onSubmit={this.logScores}>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Username" onChange={this.handleUsername} required/>
                </div>
                <div class="form-group">
                  <label for="competition">Competition Name</label>
                  <input type="text" class="form-control" id="competition" placeholder="Name" onChange={this.handleCompetition} required/>
                </div>
                <div class="form-group">
                  <label for="problem">Route #</label>
                  <input type="number" class="form-control" id="problem" onChange={this.handleProblem} required/>
                </div>
                <div class="form-group">
                  <label for="attempts">Attempts</label>
                  <input type="number" class="form-control" id="attempts" onChange={this.handleAttempts} required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg">Log Scores <i class="fa fa-hand-rock"></i></button>
              </form>
              <hr/>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Route #</th>
                    <th scope="col">Attempts</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.table}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
};
