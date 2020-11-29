import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const DateOfOrderSection = (props) => {
  return (
    <Col xs={6} lg={2}>
      <Row>
        <Col>注文日</Col>
      </Row>
      <Row>
        <Col>date of order</Col>
      </Row>
    </Col>
  );
};

export default DateOfOrderSection;
