import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const BuyAgainItem = (props) => {
  return (
    <Row>
      <Col xs={12} md={12}>
        <Row>
          <Col style={{ height: "120px" }}>img</Col>
        </Row>
      </Col>
      <Col xs={12} md={12}>
        <Row>
          <Col>name</Col>
        </Row>
        <Row>
          <Col>price</Col>
          <Col>icon</Col>
        </Row>
        <Row>
          <Col>
            <Button>カートに入れる</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BuyAgainItem;
