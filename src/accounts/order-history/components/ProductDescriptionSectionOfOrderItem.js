import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductDescriptionSectionOfOrderItem = (props) => {
  return (
    <Col md={10}>
      <Row>
        <Col>name</Col>
      </Row>
      <Row>
        <Col>seller</Col>
      </Row>
      <Row>
        <Col>price</Col>
      </Row>
      <Row>
        <Col>buy again button</Col>
      </Row>
    </Col>
  );
};

export default ProductDescriptionSectionOfOrderItem;
