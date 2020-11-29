import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const TotalPriceSection = (props) => {
  return (
    <Col xs={6} lg={2}>
      <Row>
        <Col>合計</Col>
      </Row>
      <Row>
        <Col>total price</Col>
      </Row>
    </Col>
  );
};

export default TotalPriceSection;
