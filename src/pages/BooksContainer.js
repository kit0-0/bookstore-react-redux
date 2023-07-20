import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <Container className="bg-light m-3 p-3">
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
      <hr />
      <AddBook onAdd={handleAddBook} />
    </Container>
  );
};

export default BooksContainer;
