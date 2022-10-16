import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import loginRequest from "../helpers/loginRequest";

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
      const { token } = await loginRequest(credentials);
      localStorage.setItem("access_token", token);
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
        <Row className="centered">
          <input
            type="text"
            name="username"
            disabled={credentials.email?.length > 0}
            onChange={handleCredentials}
          />
          <input
            type="email"
            name="email"
            disabled={credentials.username?.length > 0}
            onChange={handleCredentials}
          />
          <input type="password" name="password" onChange={handleCredentials} />
          <button
            onClick={handleLogin}
            disabled={
              !(
                (credentials.username?.length || credentials.email?.length) &&
                credentials.password?.length
              )
            }
          >
            Login
          </button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Login;
