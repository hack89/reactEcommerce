import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

const initialState = {}
const middleware = [thunk]


// if (localStorage.getItem('items')) {
//     initialState.cart = {

//         selectedItems: JSON.parse(localStorage.getItem('items')),

//     }
// }


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;