import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const OrderedItem = (props) => {
  return (
    <Row>
      <Col md={2}>
        <Row>
          <Col style={{ height: "120px" }}>image</Col>
        </Row>
      </Col>
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
    </Row>
  );
};

export default OrderedItem;
