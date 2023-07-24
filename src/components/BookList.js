import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.book);
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = async (item_id) => {
    try {
      await dispatch(removeBook(item_id));
      dispatch(fetchBooks());
      return item_id;
    } catch (error) {
      return error;
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(books)) {
    return <p>No books available.</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <div className="mb-3" key={book.item_id}>
          <Book
            item_id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
            onRemove={handleRemoveBook}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
