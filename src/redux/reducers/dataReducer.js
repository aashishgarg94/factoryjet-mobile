import {
    SET_ITEM,
    SET_ITEMSLIST
} from '../types';

const initialState = {
    item: {},
    itemsList: []
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMSLIST:
            return {
                ...state,
                itemsList: action.payload,
            };
        case SET_ITEM:
            return{
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}
