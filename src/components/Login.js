import React, { useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import API from "../api";

const Login = () => {
  const [credentials, setCredentials] = useState({});

  const handleCredentials = (event) => {
    const {
      target: { name, value },
    } = event;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const api = new API();
      const { token } = await api.loginRequest(credentials);
      localStorage.setItem("access_token", token);
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter username"
              name="username"
              disabled={credentials.email?.length > 0}
              onChange={handleCredentials}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="form-input"
              type="email"
              placeholder="Enter email"
              name="email"
              disabled={credentials.username?.length > 0}
              onChange={handleCredentials}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className="form-input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleCredentials}
            />
          </Form.Group>
          <Button
            className="pomodoro-btn"
            type="submit"
            onClick={handleLogin}
            disabled={
              !(
                (credentials.username?.length || credentials.email?.length) &&
                credentials.password?.length
              )
            }
          >
            Login
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Login;
