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
      data: [],
    }

    this.scores = [];
    this.allScores = [];
    this.table = [];

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
    let url = "https://cs48-climb-backend.herokuapp.com/scores/" + this.state.username + "/" + this.state.competition;
    axios.patch(url, {
      problem: this.state.problem,
      attempts: this.state.attempts
    })

    axios.get("https://cs48-climb-backend.herokuapp.com/scores/"
    ).then(response => this.setState({data: response.data}));
  }

  render() {

    for(let i = 0; i < this.state.data.length; i++) {
      let score = this.state.data[i];
      let user_name = score.user_name.replace(' ', '').trim();
      let comp = score.comp.replace(' ', '').trim();
      if(user_name == this.state.username) {
        this.allScores.push(score);
        if(comp == this.state.competition) {
          this.scores.push(score);
        }
      }
    }
    
    this.table = this.scores.map((item, key) => 
      <tr>
        <td>{item.comp}</td>
        <td>{item.problems}</td>
      </tr>
    );

    this.allTable = this.allScores.map((item, key) =>
      <tr>
        <td>{item.comp}</td>
        <td>{item.problems}</td>
      </tr>
    );

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
              <h3>Scores for this Competition</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Competition</th>
                    <th scope="col">Scores</th>
                  </tr>
                </thead>
                <tbody>
                  {this.table}
                </tbody>
              </table>
              <h3>Scores for all Competitions</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Competition</th>
                    <th scope="col">Scores</th>
                  </tr>
                </thead>
                <tbody>
                  {this.allTable}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
};
