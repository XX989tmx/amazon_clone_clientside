import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const DeliveryDateInPurchaseAction = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>{props.deliveryDate}</Col>
    </Row>
  );
};

export default DeliveryDateInPurchaseAction;
