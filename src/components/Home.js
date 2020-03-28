import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {addItem, loadItems} from '../actions/basketActions'
import PropTypes from 'prop-types'


const Home = ({addItem, loadItems, cartItems, items }) => {

    useEffect(()=>{
        loadItems()
    },[])



    return (
        
        <>
        <div className="container">
         {
             items.map(item => (
                  
                <div className='image'>
                    <img src={item.image} alt=""/>
                    <h3>{item.name}</h3>
                    <h4>${item.price.toFixed(2)}</h4>
                    <a onClick={()=> addItem(cartItems, item)} className='addToCart' href="#!"> <i className='fas fa-shopping-cart'></i></a>
                </div>
                
             ))}
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    items: state.basket.products,
    cartItems: state.cart.selectedItems
})


Home.propTypes = {
    addItem: PropTypes.func.isRequired,
    loadItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    cartItems: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {addItem, loadItems})(Home)
