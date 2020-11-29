import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AmazonPointBalance = (props) => {
  return (
    <Row>
      <Col>{props.AmazonPointBalance} pt</Col>
    </Row>
  );
};

export default AmazonPointBalance;
