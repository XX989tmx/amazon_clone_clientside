import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ShipmentAddressSection = (props) => {
  return (
    <Col xs={6} lg={4}>
      <Row>
        <Col>お届け先</Col>
      </Row>
      <Row>
        <Col>address name</Col>
      </Row>
    </Col>
  );
};

export default ShipmentAddressSection;
