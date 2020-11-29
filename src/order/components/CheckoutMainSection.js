import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutBodySection from "./CheckoutBodySection";
import CheckoutSidebarSection from "./CheckoutSidebarSection";

const CheckoutMainSection = (props) => {
  return (
    <Row>
      <CheckoutBodySection cartItems={props.cartItems} />
      <CheckoutSidebarSection />
    </Row>
  );
};

export default CheckoutMainSection;
