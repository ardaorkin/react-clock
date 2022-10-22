import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Login from "../Login";
import Signup from "../Signup";

const Enterance = () => {
  const [mode, setMode] = useState("login");

  return (
    <Card
      className="semi-area app-card centered"
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
        <Row className="centered" style={{ padding: "5rem" }}>
          {mode === "login" ? <Login /> : <Signup />}
        </Row>
      </Card.Body>
      <Card.Footer className="enterance-footer">
        <Row>
          <Col>
            <Button
              className="enterance-btn"
              disabled={mode === "login"}
              onClick={() => setMode("login")}
            >
              Login
            </Button>
          </Col>
          <Col>
            <Button
              className="enterance-btn"
              disabled={mode === "signup"}
              onClick={() => setMode("signup")}
            >
              Signup
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Enterance;
