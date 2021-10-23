import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productListReducer from '../features/products/productListSlice';
import singleProductReducer from '../features/single-product/singleProductSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import orderReducer from '../features/orders/ordersSlice';
import { productApi } from '../serviсes/productApi';
import { authApi } from '../serviсes/authApi';
import { orderApi } from '../serviсes/orderApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    productApi.reducerPath,
    authApi.reducerPath,
    orderApi.reducerPath,
  ],
};

const reducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  auth: authReducer,
  productList: productListReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
  orders: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  // reducer,
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   process.env.NODE_ENV !== 'production'
  //     ? getDefaultMiddleware().concat(
  //         logger,
  //         productApi.middleware,
  //         authApi.middleware
  //       )
  //     : getDefaultMiddleware().concat(
  //         productApi.middleware,
  //         authApi.middleware
  //       ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      productApi.middleware,
      authApi.middleware,
      orderApi.middleware,
      logger
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

let persistor = persistStore(store);

export { store, persistor };
