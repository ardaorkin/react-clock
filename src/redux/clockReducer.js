import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
  name: "time",
  initialState: {
    time: {
      hour: 0,
      minute: 0,
      second: 0,
    },
    degrees: {
      hourDegree: 0,
      minuteDegree: 0,
      secondDegree: 0,
    },
  },
  reducers: {
    getHMS: (state) => {
      const time = new Date().toLocaleTimeString("tr-TR", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      state.time.hour = time.split(":")[0];
      state.time.minute = time.split(":")[1];
      state.time.second = time.split(":")[2];
    },
    getDegrees: (state) => {
      state.degrees.hourDegree = state.time.hour * 30 - 360;
      state.degrees.minuteDegree = state.time.minute * 6 - 360;
      state.degrees.secondDegree = state.time.second * 6 - 360;
    },
  },
});

export const { getHMS, getDegrees } = clockSlice.actions;
export default clockSlice.reducer;
