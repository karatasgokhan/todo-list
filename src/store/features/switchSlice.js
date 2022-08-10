import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  switch: "movie",
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    setSwitch: (state, action) => {
      state.switch = action.payload;
    },
  },
});

export const { setSwitch } = switchSlice.actions;
export const allSwitch = (state) => state.switch;
export default switchSlice.reducer;
