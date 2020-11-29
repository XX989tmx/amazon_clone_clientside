import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import AddressConnectedToPaymentMethod from "./AddressConnectedToPaymentMethod";
import PaymentMethod from "./PaymentMethod";
const PaymentMethodAndAddress = (props) => {
  return (
    <Col>
      <PaymentMethod />
      <AddressConnectedToPaymentMethod />
    </Col>
  );
};

export default PaymentMethodAndAddress;
