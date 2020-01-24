import React from 'react';
import logo from './logo.svg';
import './App.css';

function greet() {
  alert('Ganesh and Michael say Hi!');
}
function bye() {
  alert('Johnson and Cody say Bye!');
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={greet}>
          Say Hi to Ganesh and Michael
        </button>
        <button onClick={bye}>
          Say Bye to Johnson and Cody
        </button>
      </header>
    </div>
  );
}

export default App;
