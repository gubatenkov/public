import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orderItems: [],
    orderErrors: [],
  },
  reducers: {
    saveOrder: (state, { payload }) => {
      const order = JSON.stringify(payload);
      state.orderItems = state.orderItems.concat(JSON.parse(order));
    },
    saveOrderError: (state, { payload }) => {
      state.orderErrors = state.orderErrors.concat(payload);
    },
  },
});

export const { saveOrder, saveOrderError } = orderSlice.actions;

export default orderSlice.reducer;
