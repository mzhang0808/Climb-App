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
      user_name: localStorage.getItem('username'),
      comp: this.state.comp
    }).then(response => {
      this.setState({status: response.status});
      if(this.state.status === 200) {
        localStorage.setItem('comp', this.state.comp);
        alert('Successfully joined ' + this.state.comp + '!');
      }
    });
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
            </div>
          </div>
        </div>
      </>
    );
  }
};
