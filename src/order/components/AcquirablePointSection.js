import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AcquirablePointSection = (props) => {
  return (
    <Row>
      <Col>獲得ポイント</Col>
      <Col>
        <Row>
          <Col xs={12}>acquirable points</Col>
          <Col xs={12}>円相当</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AcquirablePointSection;
