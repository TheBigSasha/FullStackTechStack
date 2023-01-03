import React from "react";
import "./App.css";
import { Greeting } from "./components/Greeting";
import { Echo } from "./components/Echo";
import { Container } from "./components/Container";
import { Messages } from "./components/Messages";

function App() {
  return (
    <div className="App">
      <h1>Sashaphoto Fullstack Starter</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <Container>
        <h2>Simple Query & Mutation</h2>
        <Greeting />
        <Echo />
        <Messages />
      </Container>
    </div>
  );
}

export default App;
