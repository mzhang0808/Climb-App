// JoinCompetition.js
// Joins competition

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class JoinCompetition extends Component {

  // Set state
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
      comp: null,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // Modify state
  onChangeHandler(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({[key]: value});
  }

  // Make API call
  onSubmitHandler(event) {
    event.preventDefault();
    axios.post("https://cs48-climb-backend.herokuapp.com/scores", {
      user_name: this.state.user_name,
      comp: this.state.comp
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
                    name="user_name" 
                    placeholder="Username"
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <div class="form-group">
                  <label>Competition Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    name="comp"
                    placeholder="Competition"
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg">Join Competition <i class="fa fa-hand-rock"></i></button>
              </form>
              <hr/>
              <pre>{this.state.data}</pre>
            </div>
          </div>
        </div>
      </>
    );
  }
};
