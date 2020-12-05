import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const OrderHistorySection = (props) => {
  return (
    <Col xs={3}>
      <Link to="/account/order-history"> 注文履歴</Link>
    </Col>
  );
};

export default OrderHistorySection;
