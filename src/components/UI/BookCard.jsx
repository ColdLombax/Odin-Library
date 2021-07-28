import React from 'react';
import PropTypes from 'prop-types';

export default function BookCard({
  // eslint-disable-next-line no-unused-vars
  title, description, pages, author, website, cover,
}) {
  return (
    <div className="bg-white-100 text-center shadow-xl rounded-md w-full h-auto relative">
      <div className=" bg-green-500 w-full h-3" />
      <a href={cover} target="_blank" rel="noreferrer">
        <div
          className="w-full h-40"
          style={{
            background: `url(${cover})`,
            backgroundColor: 'lightblue',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </a>
      <div className="p-5">
        <h1 className="font-bold text-xl truncate">{title}</h1>
        <p className=" line-clamp-6">
          {description}
        </p>
      </div>
      <div className="flex justify-around mb-12 gap-10 text-xl p-2">
        <p>
          Pages:
          {' '}
          <span className="text-blue-800">{pages}</span>
        </p>
        <p>
          By
          {' '}
          <span className="text-blue-800 truncate">{author}</span>
        </p>
      </div>
      <div className="w-full bg-purple-800 absolute bottom-0 p-2 font-bold text-white">
        <a href={website} target="_blank" rel="noreferrer">Read Book</a>
      </div>
    </div>
  );
}
BookCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
