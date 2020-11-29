import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const TotalPriceSection = (props) => {
  return (
    <Row>
      <Col>御請求額</Col>
      <Col>{props.TotalPrice} 円</Col>
    </Row>
  );
};

export default TotalPriceSection;
