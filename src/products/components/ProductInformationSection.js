import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductImagesSection from "./ProductImagesSection";
import PurchaseActionSection from "./PurchaseActionSection";

const ProductInformationSection = (props) => {
  return (
    <Row>
      <ProductImagesSection images={props.images}/>
      <ProductDescriptionSection
        name={props.name}
        brand={props.brand}
        price={props.price}
      />
      <PurchaseActionSection
        id={props.id}
        price={props.price}
        deliveryDate={props.deliveryDate}
        isStock={props.isStock}
        seller={props.seller}
        StockQuantityOptions={props.StockQuantityOptions}
        changeCartHandler={props.changeCartHandler}
      />
    </Row>
  );
};

export default ProductInformationSection;
