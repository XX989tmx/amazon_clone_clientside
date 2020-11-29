import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutCompleteInformationSection from "./CheckoutCompleteInformationSection";
import CheckoutCompleteSectionSub from "./CheckoutCompleteSectionSub";
import ShipmentCostSection from "./ShipmentCostSection";

const CheckoutSidebarSection = (props) => {
  return (
    <Col lg={3}>
      <CheckoutCompleteInformationSection
        TotalPrice={props.TotalPrice}
        completePurchaseHandler={props.completePurchaseHandler}
      />
      <ShipmentCostSection />
      <CheckoutCompleteSectionSub />
    </Col>
  );
};

export default CheckoutSidebarSection;
