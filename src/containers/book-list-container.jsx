import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../utils';

import withBookstoreService from '../components/hoc/';
import { fetchBooks, bookAddedToCart } from '../actions';

import Spinner from '../components/spinner'
import ErrorIndicator from '../components/error-indicator';
import BookList from '../components/book-list';

const BookListContainer = (props) => {
  const { books, loading, fetchBooks, error, onAddToCart } = props;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList books={books} onAddToCart={onAddToCart} />
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddToCart: bookAddedToCart,
  }, dispatch)
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
