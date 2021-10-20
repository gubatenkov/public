import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orderItems: [],
    orderErrors: [],
  },
  reducers: {
    saveOrder: (state, { payload }) => {
      state.orderItems.push(payload);
    },
    saveOrderError: (state, { payload }) => {
      state.orderErrors = state.orderErrors.concat(payload);
    },
  },
});

export const { saveOrder, saveOrderError } = orderSlice.actions;

export default orderSlice.reducer;
