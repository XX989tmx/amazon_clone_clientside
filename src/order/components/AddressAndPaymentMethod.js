import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import AddressSection from "./AddressSection";
import PaymentMethodSection from "./PaymentMethodSection";
const AddressAndPaymentMethod = (props) => {
  return (
    <Row>
      <AddressSection />
      <PaymentMethodSection />
    </Row>
  );
};

export default AddressAndPaymentMethod;
