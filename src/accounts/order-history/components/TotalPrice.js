import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const TotalPrice = (props) => {
  return (
    <Row>
      <Col>{props.totalPrice} 円</Col>
    </Row>
  );
};

export default TotalPrice;
