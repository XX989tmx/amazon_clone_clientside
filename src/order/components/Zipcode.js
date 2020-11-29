import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const Zipcode = (props) => {
  return (
    <Row>
      <Col>{props.zipCode}</Col>
    </Row>
  );
};

export default Zipcode;
