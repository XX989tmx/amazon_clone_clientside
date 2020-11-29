import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const OrderNumberSection = (props) => {
  return (
    <Col xs={6} lg={4}>
      <Row>
        <Col>注文番号</Col>
        <Col>aaa-aaaa-aaaa</Col>
      </Row>
      <Row>
        <Col>注文の詳細</Col>
        <Col>領収書</Col>
      </Row>
    </Col>
  );
};

export default OrderNumberSection;
