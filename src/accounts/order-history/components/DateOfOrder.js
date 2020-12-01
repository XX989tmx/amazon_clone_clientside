import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const DateOfOrder = (props) => {
  return (
    <Row>
      <Col>{props.dateOrdered}</Col>
    </Row>
  );
};

export default DateOfOrder;
