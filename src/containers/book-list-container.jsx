import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { compose } from '../utils';

import withBookstoreService from '../components/hoc/';
import { fetchBooks } from '../actions';

import Spinner from '../components/spinner'
import ErrorIndicator from '../components/error-indicator';
import BookList from '../components/book-list';

const BookListContainer = (props) => {
  const { books, loading, fetchBooks, error } = props;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList books={books} />
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
