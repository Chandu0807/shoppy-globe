// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

// Create root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer
});

// Create store with thunk middleware
const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

export default store;