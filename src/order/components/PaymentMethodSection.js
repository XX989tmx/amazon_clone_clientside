import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import AmazonPointSection from "./AmazonPointSection";
import PaymentMethodAndAddress from "./PaymentMethodAndAddress";
const PaymentMethodSection = (props) => {
  return (
    <Col xs={12} lg={8}>
      <Row>
        <PaymentMethodAndAddress
          paymentMethodHandler={props.paymentMethodHandler}
        />
        <AmazonPointSection
          AmazonPointBalance={props.AmazonPointBalance}
          amazonPointChangeHandler={props.amazonPointChangeHandler}
        />
      </Row>
    </Col>
  );
};

export default PaymentMethodSection;
