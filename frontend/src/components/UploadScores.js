// UploadScores.js
// Form for user to upload scores
// Fields:
// Comp Name
// Score info

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class UploadScores extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test'
    }
    this.postScores = this.postScores.bind(this);
  }

  // upon button click, call API to upload scores
  postScores() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <form>
          <div class="form-group">
            <label for="competition">Competition</label>
            <input type="number" class="form-control" id="competition" placeholder="Competition" required/>
          </div>
          <div class="form-group">
            <label for="route">Route</label>
            <input type="number" class="form-control" id="route" placeholder="Password" required/>
          </div>
          <div class="form-group">
            <label for="score">Score</label>
            <input type="password" class="form-control" id="score" placeholder="Password" required/>
          </div>
          <button type="submit" class="btn btn-default btn-lg" onClick={this.postScores}>Upload Scores <i class="fa fa-hand-rock"></i></button>
        </form>
      </>
    );
  }
};
