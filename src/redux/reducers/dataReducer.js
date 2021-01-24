import {
    SET_ITEM,
    SET_ITEMSLIST,
    SET_CARTLIST,
    SET_ORDERSLIST,
    ADD_TO_CART,
    SET_WISHLIST,
    ADD_TO_WISHLIST,
    SET_CATEGORIESLIST,
} from '../types';

const initialState = {
    item: {},
    itemsList: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 3, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}],
    ordersList: [{id: 1, date: "05 Jan 2021", store: "XYZ Store", store_location: "Mumbai, India", delivery_address: "Veera Desai Road, Azad Nagar, Mumbai", items: [{id: 1, title: "Brass Knob Set", qty: 2}, {id: 2, title: "Nails", qty: 1}], status: "Delivered", amount: 5000}],
    cartList: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18, qty: 1}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18, qty: 2}, {id: 3, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18, qty: 3}],
    wishlist: [{id: 1, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 2, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}, {id: 3, category: "Anchors and Doors", title: "Polished Brass Set", price: 4500, mrp: 5000, discount: 10, delivery: "In 3 days", gst: 18}],
    categoriesList: [{id: 1, title: "Electricals"}, {id: 2, title: "Plumbing"}, {id: 3, title: "Anchors and Doors"}]
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
            //check if already in cart, then just increase count
            const newCartList = state.cartList.length === 0 ? [action.payload] : [action.payload, ...state.cartList]
            return {
                ...state,
                cartList: newCartList
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
            //check if already present
            const newWishlist = state.wishlist.length === 0 ? [action.payload] : [action.payload, ...state.wishlist]
            return {
                ...state,
                wishist: newWishlist
            }
        case SET_CATEGORIESLIST:
            return {
                ...state,
                categoriesList: action.payload
            }
        default:
            return state
    }
}
