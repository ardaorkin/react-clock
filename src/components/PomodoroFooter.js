import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const PomodoroFooter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pomodoro);
  return (
    <Row className="fill-area pomodoro-footer">
      <Col className="centered">
        Per Pomodoro:{" "}
        {new Date(state.perPomodoro * 1000).toISOString().substr(11, 5)}
        <span className="footer-btn">+</span>{" "}
        <span className="footer-btn">-</span>
      </Col>
      <Col className="centered">
        Per Break:{" "}
        {new Date(state.breakLength * 1000).toISOString().substr(11, 5)}{" "}
        <span className="footer-btn">+</span>{" "}
        <span className="footer-btn">-</span>
      </Col>
    </Row>
  );
};

export default PomodoroFooter;
