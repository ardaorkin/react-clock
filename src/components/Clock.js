import React from "react";
import romen from "../assets/romen.png";
import classic from "../assets/classic.png";
import sport from "../assets/sport.png";
import { useSelector } from "react-redux";

var clockTypes = {
  romen,
  classic,
  sport,
};

const Clock = () => {
  const [hourDegree, setHourDegree] = React.useState();
  const [minuteDegree, setMinuteDegree] = React.useState();
  const [secondDegree, setSecondDegree] = React.useState();
  const selectedLayout = useSelector((state) => state.layout.selectedLayout);

  React.useEffect(() => {
    const interval = setInterval(function () {
      const time = new Date().toLocaleTimeString("tr-TR", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      const hour = time.split(":")[0];
      const minute = time.split(":")[1];
      const second = time.split(":")[2];
      setHourDegree(hour * 30 - 360);
      setMinuteDegree(minute * 6 - 360);
      setSecondDegree(second * 6 - 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="clock"
      style={{
        backgroundImage: `url(${clockTypes[selectedLayout]})`,
      }}
    >
      <div id="container">
        <div id="hour" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
        <div
          id="minute"
          style={{ transform: `rotate(${minuteDegree}deg)` }}
        ></div>
        <div
          id="second"
          style={{ transform: `rotate(${secondDegree}deg)` }}
        ></div>
        <div id="dot"></div>
      </div>
    </div>
  );
};

export default Clock;
