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
      <AddressAndPaymentMethod
        Address={props.Address}
        AmazonPointBalance={props.AmazonPointBalance}
        paymentMethodHandler={props.paymentMethodHandler}
        amazonPointChangeHandler={props.amazonPointChangeHandler}
      />
      <CartItemAndDeliveryOptionSection cartItems={props.cartItems} />
    </Col>
  );
};

export default CheckoutBodySection;
