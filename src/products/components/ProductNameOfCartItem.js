import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductNameOfCartItem = (props) => {
  return (
    <Row>
      <Col>{props.name}</Col>
    </Row>
  );
};

export default ProductNameOfCartItem;
