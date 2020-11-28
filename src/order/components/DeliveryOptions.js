import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import DeliveryOptionHeading from "./DeliveryOptionHeading";
import OisogibinSection from "./OisogibinSection";
import OtodokenichiziShiteibinSection from "./OtodokenichiziShiteibinSection";
import TuuzyouHaisouSection from "./TuuzyouHaisouSection";
const DeliveryOptions = (props) => {
  return (
    <Col lg={6}>
      <DeliveryOptionHeading />
      <TuuzyouHaisouSection />
      <OisogibinSection />
      <OtodokenichiziShiteibinSection />
    </Col>
  );
};

export default DeliveryOptions;
