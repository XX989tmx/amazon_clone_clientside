import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import BuyAgainItem from "./BuyAgainItem";
const SideSectionBody = (props) => {
  return (
    <Row>
      <Col>
        <BuyAgainItem />
      </Col>
    </Row>
  );
};

export default SideSectionBody;
