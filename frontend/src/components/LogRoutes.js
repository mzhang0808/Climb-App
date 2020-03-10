// LogRoutes.js
// outputs tablulated score data

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class LogRoutes extends Component {

  // Set State
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      competition: null,
      problem: null,
      attempts: null,
      key1: null,
      key2: null
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
    let url = "https://cs48-climb-backend.herokuapp.com/scores/log/" + localStorage.getItem('username') + "/" + localStorage.getItem('comp');
    axios.patch(url, {
      problem: this.state.problem,
      attempts: this.state.attempts,
      key1: this.state.key1,
      key2: this.state.key2
    })

    url = "https://cs48-climb-backend.herokuapp.com/scores/" + localStorage.getItem('username') + "/" + localStorage.getItem('comp');
    axios.get(url);

    url = "https://cs48-climb-backend.herokuapp.com/scores/" + localStorage.getItem('username') + "/" + localStorage.getItem('comp');
    axios.get(url).then(response => {
      this.setState({data: response.data});

      this.scores = [];

      for(let i = this.state.data.length - 1; i >= 0; i--) {
        let score = this.state.data[i];
        this.scores.push(score);
      }
      this.setState({status: response.status});
    });
  }

  render() {
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
              <h3>Log a Route</h3>
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
                <div class="form-group">
                  <label>Witness #1</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    name="key1" 
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <div class="form-group">
                  <label>Witness #2</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    name="key2" 
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
