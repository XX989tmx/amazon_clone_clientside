import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import OrderHistoryItemBody from "./OrderHistoryItemBody";
import OrderHistoryItemHeader from "./OrderHistoryItemHeader";
const OrderHistoryItemSection = (props) => {
  return (
    <Row>
      <Col>
        <OrderHistoryItemHeader />
        <OrderHistoryItemBody />
      </Col>
    </Row>
  );
};

export default OrderHistoryItemSection;
