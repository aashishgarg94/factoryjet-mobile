import {
    SET_ITEM,
    SET_ITEMSLIST,
    SET_CARTLIST,
    SET_ORDERSLIST,
    ADD_TO_CART,
    SET_WISHLIST,
    ADD_TO_WISHLIST,
    SET_CATEGORIESLIST,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST
} from '../types';

const initialState = {
    item: {},
    itemsList: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 3, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}],
    itemsHomePageList: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}],
    ordersList: [{id: 1, date: "05 Jan 2021", store: "XYZ Store", store_location: "Mumbai, India", delivery_address: "Veera Desai Road, Azad Nagar, Mumbai", items: [{id: 1, title: "Brass Knob Set", qty: 2}, {id: 2, title: "Nails", qty: 1}], status: "Delivered", amount: 5000}],
    cartList: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18, qty: 1}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18, qty: 2}, {id: 3, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18, qty: 3}],
    wishList: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 3, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}],
    categoriesList: [{id: 1, title: "Electricals"}, {id: 2, title: "Plumbing"}, {id: 3, title: "Anchors"}, {id: 4, title: "Wires"}, {id: 5, title: "Fastners"}, {id: 6, title: "Nails"}, {id: 7, title: "Electricals"}, {id: 8, title: "Plumbing"}, {id: 0, title: "Anchors"}]
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMSLIST:
            return {
                ...state,
                itemsList: action.payload,
            };
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
                categoriesList: action.payload
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
