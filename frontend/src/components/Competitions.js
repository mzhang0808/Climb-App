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
      data: 'Test'
    }
    this.postCompetition = this.postCompetition.bind(this);
  }

  // upon button click, call API to upload scores
  postCompetition() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form>
                <div class="form-group">
                  <label for="competition">Competition Name</label>
                  <input type="text" class="form-control" id="competition" placeholder="Name" required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg" onClick={this.postScores}>Join Competition <i class="fa fa-hand-rock"></i></button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};
