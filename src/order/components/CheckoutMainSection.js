import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutBodySection from "./CheckoutBodySection";
import CheckoutSidebarSection from "./CheckoutSidebarSection";

const CheckoutMainSection = (props) => {
  return (
    <Row>
      <CheckoutBodySection
        cartItems={props.cartItems}
        Address={props.Address}
        AmazonPointBalance={props.AmazonPointBalance}
        paymentMethodHandler={props.paymentMethodHandler}
        amazonPointChangeHandler={props.amazonPointChangeHandler}
      />
      <CheckoutSidebarSection
        TotalPrice={props.TotalPrice}
        completePurchaseHandler={props.completePurchaseHandler}
      />
    </Row>
  );
};

export default CheckoutMainSection;
