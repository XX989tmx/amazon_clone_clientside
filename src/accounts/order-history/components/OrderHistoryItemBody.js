import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import OrderHistoryItemAction from "./OrderHistoryItemAction";
import OrderHistoryItemMain from "./OrderHistoryItemMain";
const OrderHistoryItemBody = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <OrderHistoryItemMain />
          <OrderHistoryItemAction />
        </Row>
      </Col>
    </Row>
  );
};

export default OrderHistoryItemBody;
