import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/" className="logo text-dark">ReStore</Link>
      <Link to="/cart" className="shopping-cart">
        <Icon className="cart-icon" icon={faShoppingCart} />
        {numItems} items (${total})
      </Link>
    </header>
  )
}

export default ShopHeader;
