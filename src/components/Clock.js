import React from "react";
import analog from "../assets/classic.png";
import { useDispatch, useSelector } from "react-redux";
import { getDegrees, getHMS } from "../redux/clockReducer";
import Pomodor from "./Pomodor";

const Clock = () => {
  const time = useSelector((state) => state.clock.time);
  const degrees = useSelector((state) => state.clock.degrees);
  const selectedLayout = useSelector((state) => state.layout.selectedLayout);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (selectedLayout !== "pomodor") {
      const interval = setInterval(function () {
        dispatch(getHMS());
        dispatch(getDegrees());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedLayout]);

  return selectedLayout === "analog" ? (
    <div
      id="clock"
      style={{
        backgroundImage: `url(${analog})`,
      }}
    >
      <div id="container">
        <div
          id="hour"
          style={{ transform: `rotate(${degrees?.hourDegree}deg)` }}
        ></div>
        <div
          id="minute"
          style={{ transform: `rotate(${degrees?.minuteDegree}deg)` }}
        ></div>
        <div
          id="second"
          style={{ transform: `rotate(${degrees?.secondDegree}deg)` }}
        ></div>
        <div id="dot"></div>
      </div>
    </div>
  ) : selectedLayout === "pomodor" ? (
    <Pomodor />
  ) : (
    <div id="clock">
      <div className="digital-wrapper centered">
        {Object.values(time).map((value, idx) => (
          <div>
            {value}
            {idx < 2 ? ":" : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock;
