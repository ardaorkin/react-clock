import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoros: [],
};

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    setUserPomodoros: (state, action) => {
      state.pomodoros = action.payload;
    },
  },
});

export const { setUserPomodoros } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
