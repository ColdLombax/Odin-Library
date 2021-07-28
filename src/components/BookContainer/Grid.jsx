/* eslint-disable react/prop-types */
import React from 'react';
import BookCard from '../UI/BookCard';

// eslint-disable-next-line no-unused-vars
export default function Grid({ data }) {
  const bookElements = data.map((book) => (
    <BookCard
      cover={book.cover}
      title={book.title}
      description={book.description}
      pages={book.pages}
      author={book.author}
      website={book.website}
    />
  ));
  return (
    <div className="bookGrid p-5 justify-center md:justify-start">
      {bookElements}
    </div>
  );
}
