import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./redux/productsSlice";
import cartReducer from "./redux/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
  },
});

export default store;
