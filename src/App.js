import "./App.css";
import React from "react";
import Options from "./components/Options";
import Clock from "./components/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="app-wrapper-container">
      <Row className="app-wrapper-row">
        <Col className="clock-wrapper">
          <Clock />
        </Col>
        <Col className="options-wrapper">
          <Options />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
