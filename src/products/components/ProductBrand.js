import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductBrand = (props) => {
  return (
    <Row>
      <Col>{props.brand}</Col>
    </Row>
  );
};

export default ProductBrand;
