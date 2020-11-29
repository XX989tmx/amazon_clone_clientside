import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BuyAgainSectionOfNavigation = (props) => {
  return (
    <Col xs={3} md={3}>
      <Link> 再び購入</Link>
    </Col>
  );
};

export default BuyAgainSectionOfNavigation;
