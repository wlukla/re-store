import React from 'react';
import BookList from '../components/book-list';

const HomePage = ({ bookstoreService }) => {
  return (
    <div>
      <BookList />
    </div>
  )
}

export default HomePage;
