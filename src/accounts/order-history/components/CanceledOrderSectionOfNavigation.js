import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CanceledOrderSectionOfNavigation = (props) => {
  return (
    <Col xs={3} md={3}>
      <Link> キャンセルされた注文</Link>
    </Col>
  );
};

export default CanceledOrderSectionOfNavigation;
