import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
