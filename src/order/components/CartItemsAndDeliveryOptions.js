import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import CartItems from "./CartItems";
import DeliveryOptions from "./DeliveryOptions";
const CartItemsAndDeliveryOptions = (props) => {
  return (
    <Row>
      <CartItems />
      <DeliveryOptions />
    </Row>
  );
};

export default CartItemsAndDeliveryOptions;
