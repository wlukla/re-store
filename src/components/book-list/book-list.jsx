import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css'

const BookList = ({ books, bookstoreService, booksLoaded }) => {

  useEffect(() => {
    // 1. get data
    const data = bookstoreService.getBooks();
    console.log(data);
    // 2. transfer to store
    booksLoaded(data)
  }, [])

  return (
    <ul className="book-list">
      {
        books.map((book) => (
          <li key={book.id}><BookListItem book={book} /></li>
        ))
      }
    </ul>
  )
}

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
