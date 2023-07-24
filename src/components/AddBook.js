import React, { useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddBook = async () => {
    if (!title || !author || !category) {
      setErrorMessage('Please fill in all the fields before adding the book.');
      return;
    }

    try {
      await dispatch(addBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
      setErrorMessage('');
      await dispatch(fetchBooks());
    } catch (error) {
      setErrorMessage('Error adding book. Please try again later.');
    }
  };

  return (
    <Form className="add-form">
      <h3>ADD NEW BOOK</h3>
      <Row className="align-items-center flex">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Book Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button variant="primary px-4" block onClick={handleAddBook}>
            Add Book
          </Button>
        </Col>
      </Row>
      {errorMessage && <div className="text-danger error-message">{errorMessage}</div>}
    </Form>
  );
};

export default AddBook;
