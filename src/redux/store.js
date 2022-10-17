import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutReducer";
import clockReducer from "./clockReducer";
import pomodoroReducer from "./pomodoroReducer";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    clock: clockReducer,
    pomodoro: pomodoroReducer,
    user: userReducer,
  },
});
