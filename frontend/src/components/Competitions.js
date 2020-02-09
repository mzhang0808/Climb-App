// Competitions.js
// Form for user to upload scores
// Fields:
// Comp Name
// Score info

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Competition extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      comp_name: '',
      num_of_problems: null,
    }

    this.handleCompName = this.handleCompName.bind(this);
    this.handleNumProblems = this.handleNumProblems.bind(this);
    this.postCompetition = this.postCompetition.bind(this);
  }

  // upon field change, update comp name
  handleCompName(event) {
    this.setState({comp_name: event.target.value});
  }


  // upon field change, update number of routes
  handleNumProblems(event) {
    this.setState({num_of_problems: event.target.value});
  }

  // upon button click, call API to create competition
  postCompetition() {
    axios.post("https://cs48-climb-backend.herokuapp.com/competitions", {
      comp_name: this.state.comp_name,
      num_of_problems: this.state.num_of_problems
    }).then(response => this.setState({data: response.status}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <p>{this.state.data}</p>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form onSubmit={this.postCompetition}>
                <div class="form-group">
                  <label for="comp_name">Competition Name</label>
                  <input type="text" class="form-control" name="comp_name" placeholder="Name" value={this.state.comp_name} onChange={this.handleCompName} required/>
                </div>
                <div class="form-group">
                  <label for="num_of_problems"># of Routes</label>
                  <input type="number" class="form-control" name="num_of_problems" value={this.state.num_of_problems} onChange={this.handleNumProblems} required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg">Join Competition <i class="fa fa-hand-rock"></i></button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};
