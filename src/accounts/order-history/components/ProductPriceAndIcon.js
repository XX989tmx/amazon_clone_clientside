import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ProductIconOfBuyAgainItem from "./ProductIconOfBuyAgainItem";
import ProductPriceOfBuyAgainItem from "./ProductPriceOfBuyAgainItem";
const ProductPriceAndIcon = (props) => {
  return (
    <Row>
      <ProductPriceOfBuyAgainItem />
      <ProductIconOfBuyAgainItem />
    </Row>
  );
};

export default ProductPriceAndIcon;
