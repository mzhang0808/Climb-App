// LogScores.js
// outputs tablulated score data

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class LogScores extends Component {

  // Set State
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      competition: null,
      problem: null,
      attempts: null,
      data: null
    }
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
    let url = "https://cs48-climb-backend.herokuapp.com/" + this.state.username + "/" + this.state.competition;
    axios.patch(url, {
      problem: this.state.problem,
      attempts: this.state.attempts
    }).then(response => this.setState({data: response.status}));
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
                  <label>Competition Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    name="competition" 
                    placeholder="Name" 
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <div class="form-group">
                  <label>Route #</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    name="problem" 
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <div class="form-group">
                  <label>Attempts</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    name="attempts" 
                    onChange={this.onChangeHandler} 
                    required/>
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
                </tbody>
              </table>
              <pre>{this.state.data}</pre>
            </div>
          </div>
        </div>
      </>
    );
  }
};
