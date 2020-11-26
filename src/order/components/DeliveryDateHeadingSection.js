import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import DeliveryDate from "./DeliveryDate";
import DeliveryDateExplanation from "./DeliveryDateExplanation";
const DeliveryDateHeadingSection = (props) => {
  return (
    <Row>
      <DeliveryDate />
      <DeliveryDateExplanation />
    </Row>
  );
};

export default DeliveryDateHeadingSection;
