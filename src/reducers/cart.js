import * as Types from './../constants/ActionTypes';
import { findIndex } from 'lodash';


var data = JSON.parse(localStorage.getItem("CART"));
var initState = data ? data : [];

const cart = (state = initState, action) => {
  var index = null;
  switch (action.type) {
    case Types.UPDATE_PRODUCT_IN_CART:
      index = findIndex(state, (o) => {
        return o.product.id === action.product.id
      })
      if (index !== -1) {
          state[index] = {
            ...state[index],
            quantity: action.quantity <= 0 ? 1 : action.quantity
          }
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      index = findIndex(state, (o) => {
        return o.product.id === action.product.id;
      })
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.ADD_TO_CART:
      index = findIndex(state, (o) => {
        return o.product.id === action.product.id;
      })
      if (index !== -1) {
        state[index] = {
          ...state[index],
          quantity: state[index].quantity + 1
        }
      } else {
        state.push(action)
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];

  }
}
export default cart;