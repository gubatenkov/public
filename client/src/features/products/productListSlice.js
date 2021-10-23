import { createSlice } from '@reduxjs/toolkit';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    items: [],
    productListErrors: [],
  },
  reducers: {
    setLoadedProducts: (state, action) => {
      state.items = action.payload;
    },
    setError: (state, action) => {
      console.log(action.payload);
      // state.productListErrors = [...state.productListErrors, action.payload];
    },
  },
});

export const { setLoadedProducts, setError } = productListSlice.actions;

export default productListSlice.reducer;
