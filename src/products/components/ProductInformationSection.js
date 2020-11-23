import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductImagesSection from "./ProductImagesSection";
import PurchaseActionSection from "./PurchaseActionSection";

const ProductInformationSection = (props) => {
  return (
    <Row>
      <ProductImagesSection />
      <ProductDescriptionSection />
      <PurchaseActionSection />
    </Row>
  );
};

export default ProductInformationSection;
