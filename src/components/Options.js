import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useSelector, useDispatch } from "react-redux";
import { selectLayout } from "../redux/layoutReducer";

const options = [
  { name: "Analog", value: "analog" },
  { name: "Digital", value: "digital" },
  { name: "Pomodor", value: "pomodor" },
];

const Options = () => {
  const selectedLayout = useSelector((state) => state.layout.selectedLayout);
  const dispatch = useDispatch();

  return (
    <div className="centered options-wrapper">
      <ButtonGroup>
        {options.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            variant="light"
            style={{
              background: "transparent",
              border: "none",
              color: selectedLayout === radio.value ? "white" : "#d5d5d5b3",
              outline: "none !important",
              fontSize: "1.5rem",
            }}
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
