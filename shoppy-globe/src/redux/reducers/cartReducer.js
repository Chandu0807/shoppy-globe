// src/redux/reducers/cartReducer.js
import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    UPDATE_CART_QUANTITY,
    CLEAR_CART
  } from '../actions/cartActions';
  
  const initialState = {
    items: []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        // Check if product already exists in cart
        const existingItemIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );
  
        if (existingItemIndex > -1) {
          // If product exists, increase quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1
          };
  
          return {
            ...state,
            items: updatedItems
          };
        }
  
        // If product doesn't exist, add new item
        return {
          ...state,
          items: [
            ...state.items, 
            { ...action.payload, quantity: 1 }
          ]
        };
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter(
            item => item.id !== action.payload
          )
        };
  
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        };
  
      case CLEAR_CART:
        return {
          ...state,
          items: []
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;