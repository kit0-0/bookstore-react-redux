import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

const AddBook = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    if (!title || !author || !category) {
      alert('Please fill in all the fields before adding the book.');
      return;
    }

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    onAdd(newBook);
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <Form className="add-form">
      <h3>ADD NEW BOOK</h3>
      <Row className="align-items-center">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Book Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button variant="primary mt-4" size="lg" block onClick={handleAddBook}>
            Add Book
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

AddBook.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddBook;
