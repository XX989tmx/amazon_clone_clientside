import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const OrderHistoryItemHeader = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={6} lg={2}>
            <Row>
              <Col>注文日</Col>
            </Row>
            <Row>
              <Col>date of order</Col>
            </Row>
          </Col>
          <Col xs={6} lg={2}>
            <Row>
              <Col>合計</Col>
            </Row>
            <Row>
              <Col>total price</Col>
            </Row>
          </Col>
          <Col xs={6} lg={4}>
            <Row>
              <Col>お届け先</Col>
            </Row>
            <Row>
              <Col>address name</Col>
            </Row>
          </Col>
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
        </Row>
      </Col>
    </Row>
  );
};

export default OrderHistoryItemHeader;
