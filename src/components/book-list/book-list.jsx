import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';

import withBookstoreService from '../hoc/';
import { booksRequested, booksLoaded, booksError } from '../../actions';

import BookListItem from '../book-list-item';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator';

import './book-list.css'

const BookList = (props) => {
  const {
    books,
    loading,
    fetchBooks,
    error,
  } = props;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

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

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });
const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    }
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
