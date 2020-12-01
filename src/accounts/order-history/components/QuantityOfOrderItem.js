import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const QuantityOfOrderItem = (props) => {
  return (
    <Row>
      <Col>{props.quantity} 個</Col>
    </Row>
  );
};

export default QuantityOfOrderItem;
