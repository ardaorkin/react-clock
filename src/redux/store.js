import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers";

export default configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
