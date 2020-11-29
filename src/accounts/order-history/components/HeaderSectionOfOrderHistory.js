import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const HeaderSectionOfOrderHistory = (props) => {
  return (
    <Row>
      <Col md={6}>注文履歴 header</Col>
      <Col md={6}>search bar</Col>
    </Row>
  );
};

export default HeaderSectionOfOrderHistory;
