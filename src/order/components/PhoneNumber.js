import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const PhoneNumber = (props) => {
  return (
    <Row>
      <Col>{props.phoneNumber}</Col>
    </Row>
  );
};

export default PhoneNumber;
