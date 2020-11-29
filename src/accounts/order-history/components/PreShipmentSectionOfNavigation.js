import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PreShipmentSectionOfNavigation = (props) => {
  return (
    <Col xs={3} md={3}>
      <Link> 未発送の注文</Link>
    </Col>
  );
};

export default PreShipmentSectionOfNavigation;
