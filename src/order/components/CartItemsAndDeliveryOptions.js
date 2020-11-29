import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import CartItems from "./CartItems";
import DeliveryOptions from "./DeliveryOptions";
const CartItemsAndDeliveryOptions = (props) => {
    // ここでCartItemArrayをMapする
  return (
    <Row>
      <CartItems cartItems={props.cartItems} />
      <DeliveryOptions />
    </Row>
  );
};

export default CartItemsAndDeliveryOptions;
