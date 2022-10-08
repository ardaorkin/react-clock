import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutReducer";
import clockReducer from "./clockReducer";
import pomodoroReducer from "./pomodoroReducer";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    clock: clockReducer,
    pomodoro: pomodoroReducer,
  },
});
