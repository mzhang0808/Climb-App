import React from 'react';
import logo from './logo.svg';
import './App.css';

function greet() {
  alert('Ganesh and Michael say Hi!');
}
function bye() {
  alert('Johnson and Cody say Bye!');
}
function status() {
	alert('Hello World! Currently running!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={greet}>
          Say Hi to Michael and Johnson
        </button>
        <button onClick={bye}>
          Say Bye to Johnson and Cody
        </button>
        <button onClick={status}>
          Status
        </button>
      </header>
    </div>
  );
}

export default App;
