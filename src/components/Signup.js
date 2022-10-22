import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import API from "../api";

const Signup = () => {
  const [credentials, setCredentials] = useState({});

  const handleCredentials = (event) => {
    const {
      target: { name, value },
    } = event;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignup = async () => {
    const api = new API();
    const { token } = await api.signupRequest(credentials);
    localStorage.setItem("access_token", token);
    window.location.reload();
  };
  return (
    <>
      <h1 className="signup-header">Signup</h1>
      <Row className="signup-row">
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              autoComplete="nope"
              className="form-input"
              type="first_name"
              placeholder="First Name"
              name="email"
              onChange={handleCredentials}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              autoComplete="nope"
              className="form-input"
              type="last_name"
              placeholder="Last Name"
              name="email"
              onChange={handleCredentials}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          autoComplete="nope"
          className="form-input"
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={handleCredentials}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          autoComplete="nope"
          className="form-input"
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleCredentials}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          autoComplete="nope"
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleCredentials}
        />
      </Form.Group>
      <Button className="pomodoro-btn" type="submit" onClick={handleSignup}>
        Signup
      </Button>
    </>
  );
};

export default Signup;
