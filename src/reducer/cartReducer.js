import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/types'

const initialState = {
    basketNumbers: 0,
    selectedItems: []
}


export default function(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ITEM:

            return {
                ...state,
                selectedItems: payload.cartItems,
                basketNumbers: state.basketNumbers + 1
            }

        case REMOVE_ITEM:
            return {
                ...state,
                selectedItems: payload.cartItems,
                basketNumbers: state.basketNumbers - payload.elRemove
            }

        case ADD_QUANTITY:
            return {
                ...state,
                selectedItems: payload.cartItems,
                basketNumbers: payload.baskNum
            }

        case SUB_QUANTITY:
            return {
                ...state,
                selectedItems: payload.cartItems,
                basketNumbers: payload.baskNum
            }

        default:
            return state
    }
}