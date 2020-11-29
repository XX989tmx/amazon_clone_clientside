import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const AcquirablePoint = (props) => {
  return (
    <Row>
      <Col>{Math.floor(props.price * 0.01)}</Col>
    </Row>
  );
};

export default AcquirablePoint;
