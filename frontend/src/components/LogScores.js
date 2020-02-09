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
      data: 'Test',
      table: []
    }
    this.logScores = this.logScores.bind(this);
  }

  // upon button click, call API to view scores
  logScores() {
    axios.get("https://cs48-climb-backend.herokuapp.com/hello")
    .then(response => this.setState({data: response.data}));
    let tempTable = [];
    for (let i = 0; i < 69; i++) {
      let children = [];
      //Inner loop to create children
      children.push(<td>{`${i + 1}`}</td>);
      children.push(<td>Placeholder</td>);
      //Create the parent and add the children
      tempTable.push(<tr>{children}</tr>);
      this.setState({table: tempTable});
    }
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <form>
          <div class="form-group">
            <label for="competition">Competition Name</label>
            <input type="text" class="form-control" id="competition" placeholder="Name" required/>
          </div>
          <button type="submit" class="btn btn-default btn-lg" onClick={this.logScores}>Log Scores <i class="fa fa-hand-rock"></i></button>
        </form>
        <table class="table" id="opaque">
          <thead>
            <tr>
              <th scope="col"># Route</th>
              <th scope="col">Attempts</th>
            </tr>
          </thead>
          <tbody>
            {this.state.table}
          </tbody>
        </table>
      </>
    );
  }
};
