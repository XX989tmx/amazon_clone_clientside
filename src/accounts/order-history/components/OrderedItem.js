import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ProductDescriptionSectionOfOrderItem from "./ProductDescriptionSectionOfOrderItem";
import ProductImageSectionOfOrderItem from "./ProductImageSectionOfOrderItem";
const OrderedItem = (props) => {
  return (
    <Row>
      <ProductImageSectionOfOrderItem />
      <ProductDescriptionSectionOfOrderItem />
    </Row>
  );
};

export default OrderedItem;
