import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "clock_layout",
  initialState: {
    selectedLayout: "classic",
  },
  reducers: {
    selectLayout: (state, action) => {
      state.selectedLayout = action.payload;
    },
  },
});

export const { selectLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
