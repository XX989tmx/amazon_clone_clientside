import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ProductDescriptionSectionOfOrderItem from "./ProductDescriptionSectionOfOrderItem";
import ProductImageSectionOfOrderItem from "./ProductImageSectionOfOrderItem";
const OrderedItem = (props) => {
  return (
    <Row>
      <ProductImageSectionOfOrderItem
        image={props.images[0] ? props.images[0] : ""}
      />
      <ProductDescriptionSectionOfOrderItem
        id={props.id}
        quantity={props.quantity}
        name={props.name}
        price={props.price}
        brand={props.brand}
        sellerName={props.seller.name}
      />
    </Row>
  );
};

export default OrderedItem;
