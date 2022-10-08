import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addPomodoro,
  resetPomodoro,
  startPomodoro,
} from "../redux/pomodoroReducer";
import breakAlert from "../helpers/breakAlert";

const Pomodoro = () => {
  const state = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();
  const pomodoroInterval = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (
      state.pomodoroSeconds % state.perPomodoro === 0 &&
      state.pomodoroSeconds > 0
    ) {
      breakAlert(pomodoroInterval.current);
      pomodoroInterval.current = null;
    }
    dispatch(addPomodoro());
  }, [state.pomodoroTime]);

  useEffect(() => {
    setIsDisabled(!!pomodoroInterval.current);
  }, [pomodoroInterval.current]);

  const startPomodoroInterval = () => {
    pomodoroInterval.current = setInterval(() => {
      dispatch(startPomodoro());
    }, 1000);
  };
  const stopPomodoro = () => {
    clearInterval(pomodoroInterval.current);
    pomodoroInterval.current = null;
    setIsDisabled(false);
  };

  const handleResetPomodoro = () => {
    stopPomodoro();
    dispatch(resetPomodoro());
  };

  return (
    <Container className="pomodoro-wrapper">
      <Row className="centered">
        <Col className="lefted">
          <Button
            className="pomodoro-btn"
            onClick={startPomodoroInterval}
            disabled={isDisabled}
          >
            {state.pomodoroSeconds > 0 ? "Resume" : "Start"}
          </Button>
        </Col>
        <Col className="centered">
          <Button className="pomodoro-btn" onClick={stopPomodoro}>
            Pause
          </Button>
        </Col>
        <Col className="righted">
          <Button className="pomodoro-btn" onClick={handleResetPomodoro}>
            Reset
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="centered">Pomodoros: {state.count} </Col>
      </Row>
      <Row className="fill-area">
        <Col className="fill-area centered pomodoro-time">
          {state.pomodoroTime}
        </Col>
      </Row>
    </Container>
  );
};

export default Pomodoro;
