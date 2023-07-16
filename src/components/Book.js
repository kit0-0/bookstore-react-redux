import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Book.css';

const Book = ({ title, author }) => (
  <div className="book-container p-4 border">
    <div>
      <ul className="list-unstyled">
        <li>
          <div>
            <div className="book-data d-flex justify-content-between">
              <div className="book-details">
                <div className="d-flex flex-column">
                  <span>Action</span>
                  <span>{title}</span>
                  <span className="text-primary">{author}</span>
                </div>
                <div className="book-buttons-container mt-3">
                  <Button variant="light  text-primary">Comments</Button>
                  <span className="mx-1">|</span>
                  <Button variant="light text-primary">Remove</Button>
                  <span className="mx-1">|</span>
                  <Button variant="light text-primary">Edit</Button>
                </div>
              </div>

              <div className="graphic-progress d-flex align-items-center gap-1 mr-2">
                <div
                  className="circular-progress"
                />
                <div className="progress-number d-flex flex-column align-items-center justify-content-center">
                  <span>64%</span>
                  <span>Completed</span>
                </div>
              </div>
              <div className="vr" />
              <div className="current-chapter d-flex flex-column justify-content-center align-items-center">
                <span>Current Chapter</span>
                <span>Chapter 17</span>
                <Button variant="btn btn-primary">Update progress</Button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
