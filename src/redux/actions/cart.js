import {
    CART_ADD,CART_REMOVE,CART_DECREMENT
  } from "../constants/cart";
  
  export const addtoCart = (item) => ({
    type: CART_ADD,
    payload: item
  });
  
  export const removeFromCart = (item) => ({
    type: CART_DECREMENT,
    payload: item,
  });
  
  export const removeAll = (item) => ({
    type: CART_REMOVE,
    payload: item,
  });
  
  
  