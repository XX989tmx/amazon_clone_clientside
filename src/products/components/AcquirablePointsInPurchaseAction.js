import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AcquirablePointsInPurchaseAction = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>{Math.floor(props.price * 0.01)} pt</Col>
    </Row>
  );
};

export default AcquirablePointsInPurchaseAction;
