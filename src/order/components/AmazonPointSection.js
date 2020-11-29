import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AmazonPointSection = (props) => {
  return (
    <Col>
      <Row>
        <Col>
          <Row>
            <Col>Amazon points</Col>
          </Row>
          <Row>
            <Col>point balance</Col>
          </Row>
          <Row>
            <Col>point use inout</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default AmazonPointSection;
