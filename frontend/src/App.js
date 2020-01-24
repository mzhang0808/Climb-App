import React from 'react';
import logo from './logo.svg';
import './App.css';

function greet() {
  alert('Ganesh and Michael say Hi!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={greet}>
          Say Hi to Ganesh and Michael
        </button>
      </header>
    </div>
  );
}

export default App;
