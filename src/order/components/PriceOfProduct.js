import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const PriceOfProduct = (props) => {
  return (
    <Row>
      <Col>{props.price}</Col>
    </Row>
  );
};

export default PriceOfProduct;
