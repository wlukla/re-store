import React from 'react';
import './shopping-cart-table.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dick</td>
            <td>2</td>
            <td>44</td>
            <td className="actions">
              <button className="btn btn-outline-danger btn-sm">
                <Icon icon={faTrash} />
              </button>
              <button className="btn btn-outline-success btn-sm">
                <Icon icon={faPlusCircle} />
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <Icon icon={faMinusCircle} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: 20000$
      </div>
    </div>
  )
}

export default ShoppingCartTable;
