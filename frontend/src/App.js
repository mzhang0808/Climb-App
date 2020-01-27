import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  greet() {
    alert('Ganesh and Michael say Hi!');
  }
  
  bye() {
    alert('Johnson and Cody say Bye!');
  }

  async status() {
    const response =
    await axios.get("https://cs48-climb-backend.herokuapp.com/hello");
    alert(response.data);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.greet}>
            Say Hi to Michael and Johnson
          </button>
          <button onClick={this.bye}>
            Say Bye to Johnson and Cody
          </button>
          <button onClick={this.status}>
            Status
          </button>
        </header>
      </div>
    );
  }
}
