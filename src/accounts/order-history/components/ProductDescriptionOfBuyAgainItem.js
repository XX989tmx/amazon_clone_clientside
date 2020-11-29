import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import AddToCartButtonOfBuyAgainItem from "./AddToCartButtonOfBuyAgainItem";
import ProductNameOfBuyAgainItem from "./ProductNameOfBuyAgainItem";
import ProductPriceAndIcon from "./ProductPriceAndIcon";

const ProductDescriptionOfBuyAgainItem = (props) => {
  return (
    <Col xs={12} md={12}>
      <ProductNameOfBuyAgainItem />
      <ProductPriceAndIcon />
      <AddToCartButtonOfBuyAgainItem />
    </Col>
  );
};

export default ProductDescriptionOfBuyAgainItem;
