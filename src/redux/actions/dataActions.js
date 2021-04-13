import { 
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
    LOADING_UI,
    STOP_LOADING_UI,
    LOADING_DATA,
    SET_CATEGORIESLIST,
    SET_ITEMSLIST
 } from '../types'

 import axios from 'axios';

export const addToCart = (item) => (dispatch) => {
    dispatch({type: LOADING_UI})
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
    dispatch({type: STOP_LOADING_UI})
}

export const addToWishlist = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_WISHLIST,
        payload: item
    })
}

export const removeFromCart = (itemId) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: itemId
    })
}

export const removeFromWishlist = (itemId) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: itemId
    })
}

export const getAllProductCategories = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .post('/all_product_categories')
      .then((res) => {
          console.log(res.data)
        dispatch({
          type: SET_CATEGORIESLIST,
          payload: res.data.categories_list,
        });
      })
      .catch((err) => console.log(err));
  };

export const getProductSubCategories = (itemId) => (dispatch) => {
    console.log(itemId)
    dispatch({ type: LOADING_DATA });
    axios
      .post('/all_product_categories', null, {params: {parent_category: itemId}})
      .then((res) => {
          console.log(res)
        dispatch({
          type: SET_CATEGORIESLIST,
          payload: res.data.categories_list,
        });
      })
      .catch((err) => console.log(err));
  };

  export const getAllProducts = (itemId) => (dispatch) => {
    console.log(itemId)
    dispatch({ type: LOADING_DATA });
    axios
      .post('/all_products', null, {params: {category_id: itemId}})
      .then((res) => {
          console.log(res)
        dispatch({
          type: SET_ITEMSLIST,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };