import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import OrderHistoryItemBody from "./OrderHistoryItemBody";
import OrderHistoryItemHeader from "./OrderHistoryItemHeader";
const OrderHistoryItemSection = (props) => {
  return (
    <Row>
      <Col>
        <OrderHistoryItemHeader
          dateOrdered={props.dateOrdered}
          totalPrice={props.totalPrice}
          shipmentAddress={props.shipmentAddress}
        />
        <OrderHistoryItemBody items={props.items}/>
      </Col>
    </Row>
  );
};

export default OrderHistoryItemSection;
