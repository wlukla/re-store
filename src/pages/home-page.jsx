import React from 'react';
import BookList from '../components/book-list';

const HomePage = () => {

  const books = [
    {
      id: 1,
      title: 'Rework',
      author: 'David Heinemeier Hansson and Jason Fried'
    },
    {
      id: 2,
      title: 'Undercover Economist',
      author: 'Tim Harford',
    },
    {
      id: 3,
      title: 'What If?',
      author: 'Randall Munroe',
    }
  ];

  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default HomePage;
