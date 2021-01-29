import { 
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
    LOADING_UI,
    STOP_LOADING_UI
 } from '../types'

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