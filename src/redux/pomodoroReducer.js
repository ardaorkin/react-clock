import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  pomodoroSeconds: 0,
  pomodoroTime: "00:00:00",
  perPomodoro: 25 * 60, // 25 minutes
  breakLength: 5 * 60, // 5 minutes
};

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    addPomodoro: (state) => {
      state.count = parseInt(state.pomodoroSeconds / state.perPomodoro);
    },
    setPerPomodoro: (state, action) => {
      state.perPomodoro = action.payload;
    },
    setBreakLength: (state, action) => {
      state.breakLength = action.payload;
    },
    startPomodoro: (state) => {
      state.pomodoroSeconds++;
      state.pomodoroTime = new Date(state.pomodoroSeconds * 1000)
        .toISOString()
        .substr(11, 8);
    },
    resetPomodoro: (state) => (state = initialState),
  },
});

export const {
  addPomodoro,
  setPerPomodoro,
  setBreakLength,
  startPomodoro,
  resetPomodoro,
} = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
