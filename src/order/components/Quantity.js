import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const Quantity = (props) => {
  return (
    <Row>
      <Col>{props.quantity}</Col>
    </Row>
  );
};

export default Quantity;
