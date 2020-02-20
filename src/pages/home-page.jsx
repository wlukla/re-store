import React from 'react';
import BookListContainer from '../containers/book-list-container';
import ShoppingCartTable from '../components/shopping-cart-table';

const HomePage = ({ bookstoreService }) => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  )
}

export default HomePage;
