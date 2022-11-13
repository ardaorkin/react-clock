import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    myTeam: [],
  },
  reducers: {
    userTeams: (state, action) => {
      state.myTeam = action.payload;
    },
  },
});

export const { userTeams } = teamSlice.actions;
export default teamSlice.reducer;
