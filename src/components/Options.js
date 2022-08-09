import React from "react";

const Options = ({ handleSelectClockType, selectedType }) => {
  return (
    <div id="options-wrapper">
      <h1>Pick A Clock Type</h1>
      <div id="options-group">
        <input
          checked={selectedType === "classic" || !selectedType}
          className="radio-btn"
          type="radio"
          value="classic"
          name="clock-type"
          onChange={handleSelectClockType}
        />
        <h2 className="radio-btn"> Classic</h2>
        <input
          checked={selectedType === "romen"}
          className="radio-btn"
          type="radio"
          value="romen"
          name="clock-type"
          onChange={handleSelectClockType}
        />
        <h2 className="radio-btn"> Romen</h2>
        <input
          checked={selectedType === "sport"}
          className="radio-btn"
          type="radio"
          value="sport"
          name="clock-type"
          onChange={handleSelectClockType}
        />
        <h2 className="radio-btn"> Sport</h2>
      </div>
    </div>
  );
};

export default Options;
