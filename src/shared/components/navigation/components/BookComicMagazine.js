import React from 'react';
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import BookComicMagazineCategoryItems from './BookComicMagazineCategoryItems';
const BookComicMagazine = (props) => {
    return (
       <Row>
          <Col>
            <Row>
              <Col>本、コミック、雑誌 click</Col>
            </Row>
            <BookComicMagazineCategoryItems />
          </Col>
        </Row>
    );
}

export default BookComicMagazine;
