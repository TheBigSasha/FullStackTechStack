import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greeting} from "./components/Greeting";
import {Echo} from "./components/Echo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Greeting/>
          <Echo/>
      </header>
    </div>
  );
}

export default App;
