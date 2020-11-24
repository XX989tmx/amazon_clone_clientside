import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const BrandOfProduct = (props) => {
  return (
    <Row>
      <Col>{props.brand}</Col>
    </Row>
  );
};

export default BrandOfProduct;
