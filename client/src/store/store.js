import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import productListReducer from '../features/products/productListSlice';
import singleProductReducer from '../features/single-product/singleProductSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import { productApi } from '../serviсes/productApi';
import { authApi } from '../serviсes/authApi';

const reducer = {
  [productApi.reducerPath]: productApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  productList: productListReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== 'production'
      ? getDefaultMiddleware().concat(
          logger,
          productApi.middleware,
          authApi.middleware
        )
      : getDefaultMiddleware().concat(
          productApi.middleware,
          authApi.middleware
        ),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
