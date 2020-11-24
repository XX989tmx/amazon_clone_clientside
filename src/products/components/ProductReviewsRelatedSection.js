import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import ProductRating from "./ProductRating";
import ProductRatingCount from "./ProductRatingCount";
const ProductReviewsRelatedSection = (props) => {
  return (
    <Row>
      <ProductRating />
      <ProductRatingCount />
    </Row>
  );
};

export default ProductReviewsRelatedSection;
