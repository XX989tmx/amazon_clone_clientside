import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import DateOfOrderSection from "./DateOfOrderSection";
import OrderNumberSection from "./OrderNumberSection";
import ShipmentAddressSection from "./ShipmentAddressSection";
import TotalPriceSection from "./TotalPriceSection";
const OrderHistoryItemHeader = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <DateOfOrderSection />
          <TotalPriceSection />
          <ShipmentAddressSection />
          <OrderNumberSection />
        </Row>
      </Col>
    </Row>
  );
};

export default OrderHistoryItemHeader;
