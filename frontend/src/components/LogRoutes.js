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
    let url = "https://cs48-climb-backend.herokuapp.com/scores/" + localStorage.getItem('username') + "/" + localStorage.getItem('comp');
    axios.patch(url, {
      problem: this.state.problem,
      attempts: this.state.attempts
    })

    axios.get(url).then(response => this.setState({data: response.data}));
  }

  render() {
    this.scores = [];

    for(let i = this.state.data.length - 1; i >= 0; i--) {
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
                <button type="submit" class="btn btn-default btn-lg">Log Routes <i class="fa fa-hand-rock"></i></button>
              </form>
              <hr/>
              <h3>Routes for this Competition</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Route #</th>
                    <th scope="col">Attempts</th>
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
