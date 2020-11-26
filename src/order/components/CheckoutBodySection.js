import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddressAndPaymentMethod from "./AddressAndPaymentMethod";
import CartItemAndDeliveryOptionSection from "./CartItemAndDeliveryOptionSection";
import NotificationSection from "./NotificationSection";

const CheckoutBodySection = (props) => {
  return (
    <Col lg={9}>
      main section
      <NotificationSection />
      <AddressAndPaymentMethod />
      <CartItemAndDeliveryOptionSection />
    </Col>
  );
};

export default CheckoutBodySection;
