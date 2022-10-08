import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addPomodor,
  resetPomodor,
  startPomodor,
} from "../redux/pomodorReducer";
import breakAlert from "../helpers/breakAlert";

const Pomodor = () => {
  const state = useSelector((state) => state.pomodor);
  const dispatch = useDispatch();
  const pomodorInterval = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (
      state.pomodorSeconds % state.perPomodor === 0 &&
      state.pomodorSeconds > 0
    ) {
      breakAlert(pomodorInterval.current);
      pomodorInterval.current = null;
    }
    dispatch(addPomodor());
  }, [state.pomodorTime]);

  useEffect(() => {
    setIsDisabled(!!pomodorInterval.current);
  }, [pomodorInterval.current]);

  const startPomodorInterval = () => {
    pomodorInterval.current = setInterval(() => {
      dispatch(startPomodor());
    }, 1000);
  };
  const stopPomodor = () => {
    clearInterval(pomodorInterval.current);
    pomodorInterval.current = null;
    setIsDisabled(false);
  };

  const handleResetPomodor = () => {
    stopPomodor();
    dispatch(resetPomodor());
  };

  return (
    <Container className="pomodor-wrapper">
      <Row className="centered">
        <Col className="lefted">
          <Button
            className="pomodor-btn"
            onClick={startPomodorInterval}
            disabled={isDisabled}
          >
            {state.pomodorSeconds > 0 ? "Resume" : "Start"}
          </Button>
        </Col>
        <Col className="centered">
          <Button className="pomodor-btn" onClick={stopPomodor}>
            Pause
          </Button>
        </Col>
        <Col className="righted">
          <Button className="pomodor-btn" onClick={handleResetPomodor}>
            Reset
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="centered">Pomodors: {state.count} </Col>
      </Row>
      <Row className="fill-area">
        <Col className="fill-area centered pomodor-time">
          {state.pomodorTime}
        </Col>
      </Row>
    </Container>
  );
};

export default Pomodor;
