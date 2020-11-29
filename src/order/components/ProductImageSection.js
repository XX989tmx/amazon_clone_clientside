import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import ProductImage from "./ProductImage";
const ProductImageSection = (props) => {
  return (
    <Col xs={4}>
      <ProductImage imageUrl={props.imageUrl}/>
    </Col>
  );
};

export default ProductImageSection;
