import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  pomodorSeconds: 0,
  pomodorTime: "00:00:00",
  perPomodor: 5,
  breakLength: 5,
};

const pomodorSlice = createSlice({
  name: "pomodor",
  initialState,
  reducers: {
    addPomodor: (state) => {
      state.count = parseInt(state.pomodorSeconds / state.perPomodor);
    },
    setPerPomodor: (state, action) => {
      state.perPomodor = action.payload;
    },
    setBreakLength: (state, action) => {
      state.breakLength = action.payload;
    },
    startPomodor: (state) => {
      state.pomodorSeconds++;
      state.pomodorTime = new Date(state.pomodorSeconds * 1000)
        .toISOString()
        .substr(11, 8);
    },
    resetPomodor: (state) => (state = initialState),
  },
});

export const {
  addPomodor,
  setPerPomodor,
  setBreakLength,
  startPomodor,
  resetPomodor,
} = pomodorSlice.actions;
export default pomodorSlice.reducer;
