import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ProductImageOfOrderItem from "./ProductImageOfOrderItem";
const ProductImageSectionOfOrderItem = (props) => {
  return (
    <Col md={2}>
      <ProductImageOfOrderItem />
    </Col>
  );
};

export default ProductImageSectionOfOrderItem;
