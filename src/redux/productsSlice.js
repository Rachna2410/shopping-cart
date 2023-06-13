import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for fetching the products
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // Assuming the API response has a "products" property containing an array of products
    return data.products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
