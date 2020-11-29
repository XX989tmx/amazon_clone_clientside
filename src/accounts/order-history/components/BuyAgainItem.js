import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ProductDescriptionOfBuyAgainItem from "./ProductDescriptionOfBuyAgainItem";
import ProductImageOfBuyAgainItem from "./ProductImageOfBuyAgainItem";
const BuyAgainItem = (props) => {
  return (
    <Row>
      <ProductImageOfBuyAgainItem />
      <ProductDescriptionOfBuyAgainItem />
    </Row>
  );
};

export default BuyAgainItem;
