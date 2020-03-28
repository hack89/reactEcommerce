import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar = ({basketNumber}) => {

 
 
    return (
        <header>
        <nav>
          <div className="logo">S</div>
          <ul>
            <li><Link to="/">Home <i className='fas fa-home'></i></Link></li>
            <li><Link to="/about">About <i className='fas fa-info-circle'></i></Link></li>
            <li><Link to="/cart">Cart <i className='fas fa-shopping-cart'></i> <span>{basketNumber}</span></Link></li>
          </ul>
        </nav>
      </header>
    )
}


Navbar.propTypes = {
  basketNumber: PropTypes.number
}

const mapStateToProps = state => ({
  basketNumber: state.cart.basketNumbers
})

export default connect(mapStateToProps)(Navbar)
