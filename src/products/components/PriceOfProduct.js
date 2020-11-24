import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const PriceOfProduct = (props) => {
  return (
    <Row>
      <Col>{props.price}</Col>
    </Row>
  );
};

export default PriceOfProduct;
