import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const ProductName = (props) => {
  return (
    <Row>
      <Col>{props.name}</Col>
    </Row>
  );
};

export default ProductName;
