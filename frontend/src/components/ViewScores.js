// ViewScores.js
// outputs tablulated score data

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class ViewScores extends Component {

  // set state
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test',
      resultsTable: [],
    }
  }

  componentWillMount() {
    this.viewScores();
  }
  // upon button click, call API to view scores
  viewScores() {
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
      this.setState({resultsTable: tempTable});
    }
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th>Route #</th>
                    <th>Attempts</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.resultsTable}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
};
