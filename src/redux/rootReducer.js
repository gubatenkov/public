import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import directoryReducer from './reducers/directoryReducer';
import shopReducer from './reducers/shopReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
