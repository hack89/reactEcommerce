import { combineReducers } from 'redux'
import basketReducer from './basketReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    basket: basketReducer,
    cart: cartReducer
})