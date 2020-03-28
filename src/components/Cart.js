import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {deleteItem, addQuantity, subQuantity} from '../actions/basketActions'
import './cart.css'
 
const Cart = ({selectedItems, deleteItem, addQuantity,basketNumber, subQuantity}) => {
 
   



  return (
        <>
        {selectedItems.length > 0 ? ( 
            <h1 style={{textAlign: 'center', marginBottom: '70px'}}>
                Total basket: ${selectedItems.reduce((a, c)=> a + c.price * c.count, 0).toFixed(2)} </h1>
        ):(  
            <h1 style={{textAlign: 'center', marginBottom: '70px'}}>
                No items selected!
            </h1>
         )}

        <div className="cartHeader">
                  <h2>Item</h2>
                  <h2>Price</h2>
                  <h2>Quantity</h2>
                  <h2>Total</h2>
        </div>
        <div className='container2'>
            {selectedItems.map(item=> (
                <Fragment>
                    <div className="image">
                        <ion-icon id="removeBtn" onClick={()=> deleteItem(selectedItems, item) } name='close-circle'></ion-icon><img src={item.image} />
                        <span>{item.name}</span>
                    </div>
                    <div className="price" style={{textAlign: 'center'}}>${item.price.toFixed(2)}</div>
                    <div className="quantity" style={{textAlign: 'center'}}>
                        <ion-icon className='decrease' onClick={()=> subQuantity(selectedItems,basketNumber, item)} name='arrow-back-circle-outline'></ion-icon>
                            <span>{item.count}</span>
                            <ion-icon className='increase' onClick={()=> addQuantity(selectedItems,basketNumber, item)} name='arrow-forward-circle-outline'></ion-icon>
                    </div>
                    <div className="total" style={{textAlign: 'center'}}>${item.count * item.price.toFixed(2)}</div>

                </Fragment>
            )
         )}
     
        </div>
       </>
    )
}

const mapStateToProps = state => ({
    selectedItems: state.cart.selectedItems,
    basketNumber: state.cart.basketNumbers
    
})

export default connect(mapStateToProps, {deleteItem, addQuantity, subQuantity})(Cart)
