import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutReducer";
import clockReducer from "./clockReducer";
import pomodoroReducer from "./pomodoroReducer";
import userReducer from "./userReducer";
import teamsReducer from "./teamsReducer";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    clock: clockReducer,
    pomodoro: pomodoroReducer,
    user: userReducer,
    team: teamsReducer,
  },
});
