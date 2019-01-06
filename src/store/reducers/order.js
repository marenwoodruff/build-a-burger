import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const purchaseInit = (state, action) => {
  return updatedObject(state, {
    purchased: false
  })
}

const purchaseBurgerStart = (state, action) => {
  return updatedObject(state, {
    loading: true
  })
}

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updatedObject(action.orderData, {
    id: action.orderId
  })
  return updatedObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true
  })
}

const purchaseBurgerFail = (state, action) => {
  return updatedObject(state, {
    loading: false
  })
}

const fetchOrdersStart = (state, action) => {
  return updatedObject(state, {
    loading: true
  })
}

const fetchOrderSuccess = (state, action) => {
  return updatedObject(state, {
    orders: action.orders,
    loading: false
  })
}

const fetchOrdersFail = (state, action) => {
  return updatedObject(state, {
    loading: false
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
      // return {
      //   ...state,
      //   purchased: false
      // }
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
      // return {
      //   ...state,
      //   loading: true
      // }
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
      // const newOrder = {
      //   ...action.orderData,
      //   id: action.orderId
      // }
      // return {
      //   ...state,
      //   loading: false,
      //   orders: state.orders.concat(newOrder),
      //   purchased: true
      // }
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
      // return {
      //   ...state,
      //   loading: false
      // }
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
      // return {
      //   ...state,
      //   loading: true
      // }
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action);
      // return {
      //   ...state,
      //   orders: action.orders,
      //   loading: false
      // }
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
      // return {
      //   ...state,
      //   loading: false
      // }
    default:
      return state;
  }
}

export default reducer;