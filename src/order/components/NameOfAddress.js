import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const NameOfAddress = (props) => {
  return (
    <Row>
      <Col>{props.name}</Col>
    </Row>
  );
};

export default NameOfAddress;
