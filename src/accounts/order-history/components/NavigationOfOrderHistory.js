import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const NavigationOfOrderHistory = (props) => {
  return (
    <Row>
      <Col xs={3} md={3}>
        注文
      </Col>
      <Col xs={3} md={3}>
        再び購入
      </Col>
      <Col xs={3} md={3}>
        未発送の注文
      </Col>
      <Col xs={3} md={3}>
        キャンセルされた注文
      </Col>
    </Row>
  );
};

export default NavigationOfOrderHistory;
