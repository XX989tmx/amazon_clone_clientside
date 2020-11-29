import React, { useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const PaymentMethodSelector = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const paymentMethodSelectorHandler = (event) => {
    setPaymentMethod(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Row>
      <Col>
        <select value={paymentMethod} onChange={paymentMethodSelectorHandler}>
          <option value="creditCard">クレジットカード</option>
          <option value="debitCard">デビッドカード</option>
        </select>
      </Col>
    </Row>
  );
};

export default PaymentMethodSelector;
