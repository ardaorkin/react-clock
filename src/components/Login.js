import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
    const api = new API();
    const { token } = await api.loginRequest(credentials);
    localStorage.setItem("access_token", token);
    window.location.reload();
  };
  return (
    <>
      <h1 className="login-header">Login</h1>
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
    </>
  );
};

export default Login;
