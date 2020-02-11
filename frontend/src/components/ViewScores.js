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
    axios.get(url
    ).then(response => this.setState({data: response.data}));
  }

  render() {
    for(let i = 0; i < Math.min(this.state.data.length, 3); i++) {
      let score = this.state.data[i];
      this.scores.push(score);
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
                <button type="submit" class="btn btn-default btn-lg">View Scores <i class="fa fa-hand-rock"></i></button>
              </form>
              <hr/>
              <h3>Top 3 Climbs</h3>
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
            </div>
          </div>
        </div>
      </>
    );
  }
};
