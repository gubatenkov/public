import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartErrors: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    updateCartItemAmount: (state, action) => {
      const updateItem = state.cartItems.find(
        (item) => item._id === action.payload.id
      );
      updateItem.amount = action.payload.amount;
      state.cartItems
        .filter((item) => item._id !== action.payload.id)
        .push(updateItem);
    },
  },
});

export const { addCartItem, removeCartItem, updateCartItemAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
