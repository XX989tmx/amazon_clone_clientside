import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const TotalPriceOfItemsSection = (props) => {
  return (
    <Row>
      <Col>商品の小計</Col>
      <Col>total price</Col>
    </Row>
  );
};

export default TotalPriceOfItemsSection;
