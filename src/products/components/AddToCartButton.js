import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const AddToCartButton = (props) => {
  return (
    <Row>
      <Col>
        <Button>カートに入れる</Button>
      </Col>
    </Row>
  );
};

export default AddToCartButton;
