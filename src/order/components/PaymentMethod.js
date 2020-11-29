import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import PaymentMethodSelector from "./PaymentMethodSelector";
const PaymentMethod = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>支払い方法</Col>
        </Row>
        <PaymentMethodSelector
          paymentMethodHandler={props.paymentMethodHandler}
        />
        <Row>
          <Col>shimo4keta</Col>
        </Row>
        <Row>
          <Col>bunkatu explanation</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PaymentMethod;
