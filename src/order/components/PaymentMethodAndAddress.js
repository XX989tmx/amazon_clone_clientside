import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import AddressConnectedToPaymentMethod from "./AddressConnectedToPaymentMethod";
import PaymentMethod from "./PaymentMethod";
const PaymentMethodAndAddress = (props) => {
  return (
    <Col>
      <PaymentMethod paymentMethodHandler={props.paymentMethodHandler} />
      <AddressConnectedToPaymentMethod />
    </Col>
  );
};

export default PaymentMethodAndAddress;
