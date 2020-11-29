import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import OrderedItem from "./OrderedItem";
const OrderedItems = (props) => {
  return (
    <Row>
      <Col>
        <OrderedItem />
      </Col>
    </Row>
  );
};

export default OrderedItems;
