import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const DeliveryOptions = (props) => {
  return (
    <Col lg={6}>
      <Row>
        <Col>プライム配送オプション</Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={11}>
          {" "}
          <Row>
            <Col>tuuzyouhaisou explanation</Col>
          </Row>
          <Row>
            <Col>manebarai</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={5}>oisogibinn</Col>
        <Col xs={5}>delivery date</Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={11}>
          <Row>
            <Col>otodokenitizishiteibinn</Col>
          </Row>
          <Row>
            <Col>delivery date</Col>
          </Row>
          <Row>
            <Col>explanation</Col>
          </Row>
          <Row>
            <Col> link to detail</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DeliveryOptions;
