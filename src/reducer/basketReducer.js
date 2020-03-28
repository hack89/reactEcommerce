import { LOAD_ITEMS } from '../actions/types'

const initialState = {
    products: []
}


export default function(state = initialState, { type, payload }) {
    switch (type) {


        case LOAD_ITEMS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}