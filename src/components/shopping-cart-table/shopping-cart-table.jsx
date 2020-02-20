import React from 'react';
import './shopping-cart-table.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import {
  bookDeletedFromCart,
  bookDecreasedInCart,
  bookAddedToCart,
} from '../../actions';



const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total} = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td className="actions">
          <button
            className="btn btn-outline-success btn-sm"
            onClick={ () => onIncrease(id) }
          >
            <Icon icon={faPlusCircle} />
          </button>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={ () => onDecrease(id) }
          >
            <Icon icon={faMinusCircle} />
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={ () => onDelete(id) }
          >
            <Icon icon={faTrash} />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => ({
  items: cartItems,
  total: orderTotal,
})

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookDecreasedInCart,
  onDelete: bookDeletedFromCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartTable);
