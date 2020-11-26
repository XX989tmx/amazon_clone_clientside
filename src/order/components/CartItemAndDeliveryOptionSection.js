import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import CartItemsAndDeliveryOptions from "./CartItemsAndDeliveryOptions";
import DeliveryDateHeadingSection from "./DeliveryDateHeadingSection";
const CartItemAndDeliveryOptionSection = (props) => {
  return (
    <Row>
      <Col>
        mainsection body section
        <Row>
          <Col>
            <DeliveryDateHeadingSection />
            <CartItemsAndDeliveryOptions />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItemAndDeliveryOptionSection;
