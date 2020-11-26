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
      <ProductDescriptionSection name={props.name} brand={props.brand} price={props.price} />
      <PurchaseActionSection price={props.price} deliveryDate={props.deliveryDate} isStock={props.isStock} seller={props.seller} />
    </Row>
  );
};

export default ProductInformationSection;
