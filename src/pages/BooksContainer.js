import React from 'react';
import { Container } from 'react-bootstrap';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const BooksContainer = () => (
  <Container className="bg-light m-3 p-3">
    <BookList />
    <hr />
    <AddBook />
  </Container>
);
export default BooksContainer;
