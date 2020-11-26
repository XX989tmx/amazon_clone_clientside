import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const ShipmentAddress = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>name</Col>
        </Row>
        <Row>
          <Col>zipcode</Col>
        </Row>
        <Row>
          <Col>addressinfo1</Col>
        </Row>
        <Row>
          <Col>addressinfo2</Col>
        </Row>
        <Row>
          <Col>phonenumber</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ShipmentAddress;
