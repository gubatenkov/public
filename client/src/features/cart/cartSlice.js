import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartErrors: [],
    shippingData: {
      address: '',
      city: '',
      index: '',
      country: '',
    },
    paymentData: {
      method: '',
    },
  },
  reducers: {
    savePaymentMethod: (state, { payload }) => {
      state.paymentData.method = payload;
    },
    updateShippingData: (state, { payload }) => {
      state.shippingData = payload;
    },
    addCartItem: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    removeCartItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== payload);
    },
    updateCartItemAmount: (state, { payload }) => {
      const updateItem = state.cartItems.find(
        (item) => item._id === payload.id
      );
      updateItem.amount = payload.amount;
      state.cartItems
        .filter((item) => item._id !== payload.id)
        .push(updateItem);
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  updateCartItemAmount,
  updateShippingData,
  savePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
