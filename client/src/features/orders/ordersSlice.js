import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orderItems: [],
    orderErrors: [],
    orderPay: {
      success: null,
      error: [],
    },
  },
  reducers: {
    saveOrder: (state, { payload }) => {
      const filtered = state.orderItems.filter((i) => i._id !== payload._id);
      filtered.push(payload);
      state.orderItems = filtered;
    },
    saveOrderError: (state, { payload }) => {
      state.orderErrors = state.orderErrors.concat(payload);
    },
    payOrderSuccess: (state, action) => {
      state.orderPay.success = true;
    },
    payOrderError: (state, { payload }) => {
      state.orderPay.error.push(payload);
    },
  },
});

export const { saveOrder, saveOrderError, payOrderSuccess, payOrderError } =
  orderSlice.actions;

export default orderSlice.reducer;
