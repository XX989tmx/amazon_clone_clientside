import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const PriceOfOrderItem = (props) => {
  return (
    <Row>
      <Col>{props.price} 円</Col>
    </Row>
  );
};

export default PriceOfOrderItem;
