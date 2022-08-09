import "./App.css";
import React from "react";
import Options from "./components/Options";
import romen from "./assets/romen.png";
import classic from "./assets/classic.png";
import sport from "./assets/sport.png";

var clockTypes = {
  romen,
  classic,
  sport,
};

function App() {
  const [hourDegree, setHourDegree] = React.useState();
  const [minuteDegree, setMinuteDegree] = React.useState();
  const [secondDegree, setSecondDegree] = React.useState();
  const [selectedType, setSelectedType] = React.useState("classic");

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

  const handleSelectClockType = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="app">
      <div
        id="clock"
        style={{
          backgroundImage: `url(${clockTypes[selectedType]})`,
        }}
      >
        <div id="container">
          <div
            id="hour"
            style={{ transform: `rotate(${hourDegree}deg)` }}
          ></div>
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
      <Options
        handleSelectClockType={handleSelectClockType}
        selectedType={selectedType}
      />
    </div>
  );
}

export default App;
