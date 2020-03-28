import { ADD_ITEM, LOAD_ITEMS, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from './types'
import axios from 'axios'

export const addItem = (items, prod) => dispatch => {
    const cartItems = items.slice()
    let productAlreadyInCart = false;
    cartItems.forEach(item => {
        if (item.id === prod.id) {
            productAlreadyInCart = true;
            item.count++
        }

    })
    if (!productAlreadyInCart) {
        cartItems.push({
            ...prod,
            count: 1
        })
    }


    localStorage.setItem('items', JSON.stringify(cartItems))

    dispatch({
        type: ADD_ITEM,
        payload: {
            cartItems
        }
    })
}

export const deleteItem = (items, item) => dispatch => {
    const cartItems = items.slice().filter(el => el.id !== item.id)

    localStorage.setItem("items", JSON.stringify(cartItems));

    dispatch({
        type: REMOVE_ITEM,
        payload: {
            cartItems,
            elRemove: item.count
        }
    })
}


export const addQuantity = (items, baskNum, item) => dispatch => {
    const cartItems = items.slice()
    const element = cartItems.find(el => el.id === item.id)
    element.count++
        baskNum++

        localStorage.setItem("items", JSON.stringify(cartItems));
    dispatch({
        type: ADD_QUANTITY,
        payload: {
            cartItems,
            baskNum
        }
    })
}

export const subQuantity = (items, baskNum, item) => dispatch => {
    const cartItems = items.slice()
    const element = cartItems.find(el => el.id === item.id)
    const elementIndex = cartItems.indexOf(element)
    element.count--
        baskNum--
        if (item.count === 0) {
            cartItems.splice(elementIndex, 1)
        }

    localStorage.setItem("items", JSON.stringify(cartItems));
    dispatch({
        type: SUB_QUANTITY,
        payload: {
            cartItems,
            baskNum
        }
    })

}


export const loadItems = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/products')

        dispatch({
            type: LOAD_ITEMS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}