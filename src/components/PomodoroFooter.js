import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decreasePerPomodoro,
  increaseBreakLength,
  increasePerPomodoro,
  decreaseBreakLength,
} from "../redux/pomodoroReducer";

const PomodoroFooter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pomodoro);
  return (
    <Row className="fill-area pomodoro-footer">
      <Col className="centered">
        Per Pomodoro:{" "}
        {new Date(state.perPomodoro * 1000).toISOString().substr(11, 8)}
        <span
          className="footer-btn"
          onClick={() => dispatch(increasePerPomodoro())}
        >
          +
        </span>{" "}
        <span
          className="footer-btn"
          onClick={() => dispatch(decreasePerPomodoro())}
        >
          -
        </span>
      </Col>
      <Col className="centered">
        Per Break:{" "}
        {new Date(state.breakLength * 1000).toISOString().substr(11, 8)}{" "}
        <span
          className="footer-btn"
          onClick={() => dispatch(increaseBreakLength())}
        >
          +
        </span>{" "}
        <span
          className="footer-btn"
          onClick={() => dispatch(decreaseBreakLength())}
        >
          -
        </span>
      </Col>
    </Row>
  );
};

export default PomodoroFooter;
