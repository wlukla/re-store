import React from 'react';
import withBookstoreService from '../hoc';

const App = () => (
  <div>
    <h1>Hello world</h1>
  </div>
)

export default withBookstoreService()(App);
