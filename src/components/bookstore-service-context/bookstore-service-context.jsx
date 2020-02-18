import React from 'react';
import BookstoreService from '../../services/bookstore-service';

const {
  Consumer: BookstoreServiceConsumer,
  Provider: BookstoreServiceProvider,
} = React.createContext(BookstoreService);

export {
  BookstoreServiceConsumer,
  BookstoreServiceProvider,
}
