import {
    SET_ITEM,
    SET_ITEMSLIST,
    SET_ITEMSHOMEPAGELIST,
    SET_CARTLIST,
    SET_ORDERSLIST,
    ADD_TO_CART,
    SET_WISHLIST,
    ADD_TO_WISHLIST,
    SET_CATEGORIESLIST,
    SET_BRANDSLIST,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
    LOADING_DATA
} from '../types';

const initialState = {
    loading: false,
    item: {},
    itemsList: [],
    itemsHomePageList: [],
    ordersList: [{id: 1, date: "05 Jan 2021", store: "XYZ Store", store_location: "Mumbai, India", delivery_address: "Veera Desai Road, Azad Nagar, Mumbai", items: [{id: 1, title: "Brass Knob Set", qty: 2}, {id: 2, title: "Nails", qty: 1}], status: "Delivered", amount: 5000}],
    cartList: [],
    wishList: [],
    categoriesList: [],
    brandsList: []
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_ITEMSLIST:
            return {
                ...state,
                itemsList: action.payload,
            };
        case SET_ITEMSHOMEPAGELIST:
            return {
                ...state,
                itemsHomePageList: action.payload
            }
        case SET_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case SET_CARTLIST:
            return {
                ...state,
                cartList: action.payload
            }
        case ADD_TO_CART:
            const itemCartIndex = state.cartList.findIndex(
                (item) => item.id === action.payload.id,
              );        
            if(itemCartIndex === -1){
                state.cartList = state.cartList.length === 0 ? [action.payload] : [action.payload, ...state.cartList]
            }else{
                let itemAdded = state.cartList[itemCartIndex]
                itemAdded.qty = itemAdded.qty + action.payload.qty
                state.cartList[itemCartIndex] = itemAdded
            }
            return {
                ...state,
            }
        case SET_ORDERSLIST:
            return {
                ...state,
                ordersList: action.payload
            }
        case SET_WISHLIST:
            return {
                ...state,
                wishlist: action.payload
            }
        case ADD_TO_WISHLIST:
            const itemWishlistIndex = state.wishList.findIndex((item) => item.id === action.payload.id )
            if(itemWishlistIndex === -1){
                state.wishList = state.wishList.length === 0 ? [action.payload] : [action.payload, ...state.wishList]
            }
            return {
                ...state,
            }
        case SET_CATEGORIESLIST:
            return {
                ...state,
                categoriesList: action.payload,
                loading: false
            }
        case SET_BRANDSLIST:
            return {
                ...state,
                brandsList: action.payload,
                loading: false
            }
        case REMOVE_FROM_CART:
            const itemCartRemoveIndex = state.cartList.findIndex(
                (item) => item.id === action.payload,
              );
            if(itemCartRemoveIndex !== -1){
                state.cartList.splice(itemCartRemoveIndex, 1)
            }
            return{
                ...state
            }
        case REMOVE_FROM_WISHLIST:
            const itemWishlistRemoveIndex = state.wishList.findIndex(
                (item) => item.id === action.payload,
            );
            if(itemWishlistRemoveIndex !== -1){
                state.wishList.splice(itemWishlistRemoveIndex, 1)
            }
            return{
                ...state
            }
        default:
            return state
    }
}
