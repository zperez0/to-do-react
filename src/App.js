import React from "react";
import Header from "./components/Header";
import TodoControl from "./components/TodoControl";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";


function App() {
  return (
    <>
      <Container>
        <Header />
        <TodoControl />
      </Container>
    </>
  );
}

export default App;
