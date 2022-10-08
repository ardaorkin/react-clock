import "./App.css";
import React from "react";
import Options from "./components/Options";
import Clock from "./components/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Container className="fill-area centered">
      <Card
        className="semi-area app-card"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
          border: "0px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Card.Body className="app-card-body">
          <Row className="centered">
            <Options />
          </Row>
          <Row className="clock-row">
            <Clock />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
