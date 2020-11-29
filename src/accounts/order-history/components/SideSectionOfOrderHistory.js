import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import SideSectionBody from "./SideSectionBody";
import SideSectionHeader from "./SideSectionHeader";
const SideSectionOfOrderHistory = (props) => {
  return (
    <Col xs={12} md={12} lg={2}>
      <Row>
        <Col>
          <SideSectionHeader />
          <SideSectionBody />
        </Col>
      </Row>
    </Col>
  );
};

export default SideSectionOfOrderHistory;
