import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const DeliveryDateAndStatusSection = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>配送日</Col>
        </Row>
        <Row>
          <Col>status</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DeliveryDateAndStatusSection;
