import React from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

const AddBook = () => (
  <Form className="add-form">
    <h3>ADD NEW BOOK</h3>
    <Row className="align-items-center">
      <Col md={4}>
        <Form.Control type="text" placeholder="Book Title" />
      </Col>
      <Col md={4}>
        <Form.Control type="text" placeholder="Book Author" />
      </Col>
      <Col md={4}>
        <Button variant="primary" size="lg" block>Add Book</Button>
      </Col>
    </Row>
  </Form>
);

export default AddBook;
