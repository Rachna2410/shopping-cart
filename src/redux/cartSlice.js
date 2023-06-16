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
    removeItem(state, action) {
      const itemId = action.payload;
      // return state.data.filter((item) => item.id !== itemId);
      state.data.splice(itemId, 1);
    },
  },
});

export const { addItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
