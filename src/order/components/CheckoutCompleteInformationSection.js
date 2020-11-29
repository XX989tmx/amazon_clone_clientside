import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderCompleteButton from "./OrderCompleteButton";
import OrderInformation from "./OrderInformation";

const CheckoutCompleteInformationSection = (props) => {
  return (
    <Row>
      <Col>
        <OrderCompleteButton />
        <OrderInformation />
      </Col>
    </Row>
  );
};

export default CheckoutCompleteInformationSection;
