import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    data: [],
  },
  reducers: {
    addItems(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
