import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import CheckDeliveryStatus from "./CheckDeliveryStatus";
import HideOrder from "./HideOrder";
import ReturnOrderedItem from "./ReturnOrderedItem";
import WriteProductReview from "./WriteProductReview";
const OrderHistoryItemAction = (props) => {
  return (
    <Col xs={4} md={3}>
      <CheckDeliveryStatus />
      <ReturnOrderedItem />
      <WriteProductReview />
      <HideOrder />
    </Col>
  );
};

export default OrderHistoryItemAction;
