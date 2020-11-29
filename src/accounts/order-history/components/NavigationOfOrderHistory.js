import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import BuyAgainSectionOfNavigation from "./BuyAgainSectionOfNavigation";
import CanceledOrderSectionOfNavigation from "./CanceledOrderSectionOfNavigation";
import OrderSectionOfNavigation from "./OrderSectionOfNavigation";
import PreShipmentSectionOfNavigation from "./PreShipmentSectionOfNavigation";
const NavigationOfOrderHistory = (props) => {
  return (
    <Row>
      <OrderSectionOfNavigation />
      <BuyAgainSectionOfNavigation />
      <PreShipmentSectionOfNavigation />
      <CanceledOrderSectionOfNavigation />
    </Row>
  );
};

export default NavigationOfOrderHistory;
