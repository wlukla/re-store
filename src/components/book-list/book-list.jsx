import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner'

import './book-list.css'

const BookList = ({ books, bookstoreService, booksLoaded, loading }) => {

  // const useBookList = () => {
  //   const request = useCallback(() => bookstoreService.getBooks(), [])
  //   return useRequest(request);
  // }

  // const useRequest = () => {
  //   const initialState = useMemo(() => ({

  //   }))
  // }

  useEffect(() => {
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data)
      });
  }, [])

  if (loading) {
    return <Spinner />
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

const mapStateToProps = ({ books, loading }) => ({ books, loading });
const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
