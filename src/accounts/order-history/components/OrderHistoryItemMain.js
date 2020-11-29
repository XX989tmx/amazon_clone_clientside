import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import DeliveryDateAndStatusSection from "./DeliveryDateAndStatusSection";
import OrderedItems from "./OrderedItems";
const OrderHistoryItemMain = (props) => {
  return (
    <Col xs={8} md={9}>
      <DeliveryDateAndStatusSection />
      <OrderedItems />
    </Col>
  );
};

export default OrderHistoryItemMain;
