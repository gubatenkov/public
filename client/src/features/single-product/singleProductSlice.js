import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    item: null,
    productErrors: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.item = action.payload;
    },
    setError: (state, action) => state.productErrors.concat(action.payload),
  },
});

export const { setProduct, setError } = singleProductSlice.actions;

export default singleProductSlice.reducer;
