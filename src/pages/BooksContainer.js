import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import { addBook } from '../redux/books/booksSlice';

const BooksContainer = () => {
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <Container className="bg-light m-3 p-3">
      <BookList />
      <hr />
      <AddBook onAdd={handleAddBook} />
    </Container>
  );
};

export default BooksContainer;
