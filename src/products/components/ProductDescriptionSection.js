import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductBrand from "./ProductBrand";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductReview from "./ProductReview";
import ProductTitle from "./ProductTitle";

const ProductDescriptionSection = (props) => {
  return (
    <Col
      xs={7}
      lg={4}
      style={{
        height: "500px",
      }}
    >
      <ProductTitle />
      <ProductBrand />
      <ProductReview />
      <ProductPrice />
      <ProductDescription />
    </Col>
  );
};

export default ProductDescriptionSection;
