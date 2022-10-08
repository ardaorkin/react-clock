import React, { useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useSelector, useDispatch } from "react-redux";
import { selectLayout } from "../redux/reducers";

const options = [
  { name: "Classic", value: "classic" },
  { name: "Romen", value: "romen" },
  { name: "Sport", value: "sport" },
];

const Options = () => {
  const selectedLayout = useSelector((state) => state.layout.selectedLayout);
  const dispatch = useDispatch();

  return (
    <div id="options-wrapper">
      <h1>Pick A Clock Type</h1>
      <ButtonGroup>
        {options.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={selectedLayout === radio.value}
            onChange={(e) => dispatch(selectLayout(e.currentTarget.value))}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Options;
