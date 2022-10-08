import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutReducer";
import clockReducer from "./clockReducer";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    clock: clockReducer,
  },
});
