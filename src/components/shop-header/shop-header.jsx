import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <a href="#" className="logo text-dark">ReStore</a>
      <a className="shopping-cart">
        <Icon className="cart-icon" icon={faShoppingCart} />
        {numItems} items (${total})
      </a>
    </header>
  )
}

export default ShopHeader;
