import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AcquirablePointsOfOrder = (props) => {
  return (
    <Col>
      <Row>
        <Col xs={12}>{Math.round(props.TotalPrice * 0.01)} pt</Col>
        <Col xs={12}>{Math.round(props.TotalPrice * 0.01)} 円相当</Col>
      </Row>
    </Col>
  );
};

export default AcquirablePointsOfOrder;
