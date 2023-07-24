import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      {books.map((book) => (
        <div className="mb-3" key={book.item_id}>
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            onRemove={() => handleRemoveBook(book.item_id)}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
