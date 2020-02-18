import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (View) => {
  return (props) => (
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => (
          <View
            {...props}
            bookstoreService={bookstoreService}
          />
        )
      }
    </BookstoreServiceConsumer>
  )
}

export default withBookstoreService;
