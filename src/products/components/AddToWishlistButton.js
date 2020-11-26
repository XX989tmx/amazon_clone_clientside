import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AddToWishlistButton = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Button> add to wishlist</Button>
      </Col>
    </Row>
  );
};

export default AddToWishlistButton;
