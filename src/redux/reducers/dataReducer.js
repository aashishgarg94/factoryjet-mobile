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
    LOADING_DATA,
    SET_ADDRESSLIST
} from '../types';

const initialState = {
    loading: false,
    item: {},
    itemsList: [],
    itemsHomePageList: [],
    ordersList: [],
    cartList: [],
    wishList: [],
    categoriesList: [],
    brandsList: [],
    addressList: []
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_ITEMSLIST:
            let itemslist = action.payload;
            return {
                ...state,
                itemsList: itemslist,
                loading: false
            };
        case SET_ITEMSHOMEPAGELIST:
            let itemshomepagelist = action.payload

            return {
                ...state,
                itemsHomePageList: itemshomepagelist,
                loading: false
            }
        case SET_ITEM:
            let item = action.payload
            return {
                ...state,
                item: item,
                loading: false
            }
        case SET_CARTLIST:
            return {
                ...state,
                cartList: action.payload,
                loading: false
            }
        case SET_ADDRESSLIST:
            return {
                ...state,
                addressList: action.payload,
                loading: false
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
