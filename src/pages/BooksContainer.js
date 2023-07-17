import React from 'react';
import { Container } from 'react-bootstrap';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const BooksContainer = () => (
  <Container className="bg-light m-3 p-3">
    <div className="mb-3">
      <Book title="The Hunger Games" author="Suzanne Collins" />
    </div>
    <div className="mb-3">
      <Book title="Dune" author="Frank Herbert" />
    </div>
    <div className="mb-5">
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    </div>
    <hr />
    <AddBook />
  </Container>
);

export default BooksContainer;
