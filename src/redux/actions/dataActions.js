import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  LOADING_UI,
  STOP_LOADING_UI,
  LOADING_DATA,
  SET_CATEGORIESLIST,
  SET_BRANDSLIST,
  SET_ITEMSLIST,
  SET_ITEMSHOMEPAGELIST,
  SET_ITEM,
  SET_CARTLIST,
  SET_ADDRESSLIST
} from '../types'

import axios from 'axios';

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/update_cart', null, { params: { product_id: item.id, product_qty: item.qty } })
    .then((res) => {
      dispatch(getAllCartItems())
    })
    .catch((err) => {
      console.log("err", err)
    });
  dispatch({ type: STOP_LOADING_UI })
}

export const getAllCartItems = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/all_cart_items')
    .then((res) => {
      dispatch({
        type: SET_CARTLIST,
        payload: res.data.items_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_CARTLIST,
        payload: [],
      });
    })
};

export const getAllAddresses = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/all_addresses')
    .then((res) => {
      dispatch({
        type: SET_ADDRESSLIST,
        payload: res.data.address_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ADDRESSLIST,
        payload: [],
      });
    })
};

export const createAddress = (address) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/create_address', null, { params: address })
    .then((res) => {
      dispatch(getAllAddresses())
    })
    .catch((err) => {
      console.log("err", err)
    });
  dispatch({ type: STOP_LOADING_UI })
}

export const setPrimaryAddress = (addressId) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/set_primary_address', null, { params: addressId })
    .then((res) => {
      dispatch(getAllAddresses())
    })
    .catch((err) => {
      console.log("err", err)
    });
  dispatch({ type: STOP_LOADING_UI })
}

export const addToWishlist = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: item
  })
}

export const removeFromCart = (itemId) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/update_cart', null, { params: { product_id: itemId, product_qty: 0 } })
    .then((res) => {
      dispatch(getAllCartItems())
    })
    .catch((err) => {
      console.log("err", err)
    });
  dispatch({ type: STOP_LOADING_UI })
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
      dispatch({
        type: SET_CATEGORIESLIST,
        payload: res.data.categories_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_CATEGORIESLIST,
        payload: [],
      });
    })
};

export const getProductSubCategories = (itemId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/all_product_categories', null, { params: { parent_category: itemId } })
    .then((res) => {
      dispatch({
        type: SET_CATEGORIESLIST,
        payload: res.data.categories_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_CATEGORIESLIST,
        payload: [],
      });
    });
};

export const getAllProductBrands = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/all_brands')
    .then((res) => {
      dispatch({
        type: SET_BRANDSLIST,
        payload: res.data.brands_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BRANDSLIST,
        payload: [],
      });
    })
};

export const getAllProducts = (itemId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/all_products', null, { params: { category_id: itemId } })
    .then((res) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: res.data.products_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: [],
      });
    });
};

export const getHomepageProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/homepage_products')
    .then((res) => {
      dispatch({
        type: SET_ITEMSHOMEPAGELIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEMSHOMEPAGELIST,
        payload: [],
      });
    });
};

export const getNewArrivalsProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/new_arrivals_products')
    .then((res) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: res.data.products_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: [],
      });
    });
};

export const getValueOfferProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/value_offer_products')
    .then((res) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: res.data.products_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: [],
      });
    });
};

export const getBestsellerProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/bestseller_products')
    .then((res) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: res.data.products_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: [],
      });
    });
};

export const getAllBrandProducts = (brand) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/brand_products', null, { params: { brand: brand } })
    .then((res) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: res.data.products_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEMSLIST,
        payload: [],
      });
    });
};

export const getProduct = (itemId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/get_product_by_id', null, { params: { product_id: itemId } })
    .then((res) => {
      dispatch({
        type: SET_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ITEM,
        payload: {},
      });
    });
};