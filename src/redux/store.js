import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutReducer";
import clockReducer from "./clockReducer";
import pomodorReducer from "./pomodorReducer";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    clock: clockReducer,
    pomodor: pomodorReducer,
  },
});
