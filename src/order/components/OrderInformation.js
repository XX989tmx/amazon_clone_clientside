import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import AcquirablePointSection from "./AcquirablePointSection";
import OrderInformationHeader from "./OrderInformationHeader";
import ShipmentCostOfOrderSection from "./ShipmentCostOfOrderSection";
import TotalPriceOfItemsSection from "./TotalPriceOfItemsSection";
import TotalPriceSection from "./TotalPriceSection";
const OrderInformation = (props) => {
  return (
    <Row>
      <Col>
        <OrderInformationHeader />
        <TotalPriceOfItemsSection TotalPrice={props.TotalPrice} />
        <ShipmentCostOfOrderSection />
        <TotalPriceSection TotalPrice={props.TotalPrice} />
        <AcquirablePointSection TotalPrice={props.TotalPrice} />
      </Col>
    </Row>
  );
};

export default OrderInformation;
