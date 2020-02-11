// CreateCompetition.js
// Creates competition

import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class CreateCompetition extends Component {

  // Set state
  constructor(props) {
    super(props);
    this.state = {
      comp_name: null,
      num_of_problems: null,
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
    axios.post("https://cs48-climb-backend.herokuapp.com/competitions", {
      comp_name: this.state.comp_name,
      num_of_problems: this.state.num_of_problems
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
                  <label>Competition Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    name="comp_name" 
                    placeholder="Name"
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <div class="form-group">
                  <label># of Routes</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    name="num_of_problems"
                    onChange={this.onChangeHandler} 
                    required/>
                </div>
                <button type="submit" class="btn btn-default btn-lg">Create Competition <i class="fa fa-hand-rock"></i></button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};
