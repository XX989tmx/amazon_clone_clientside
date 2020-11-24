import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductPriceOfCart = (props) => {
  return (
    <Row>
      <Col>{props.price}</Col>
    </Row>
  );
};

export default ProductPriceOfCart;
