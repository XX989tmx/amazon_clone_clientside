import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const PaymentMethodSection = (props) => {
  return (
    <Col xs={12} lg={8}>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>支払い方法</Col>
              </Row>
              <Row>
                <Col>shimo4keta</Col>
              </Row>
              <Row>
                <Col>bunkatu explanation</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>お支払い方法に紐付いた住所</Col>
              </Row>
              <Row>
                <Col>name</Col>
              </Row>
              <Row>
                <Col>zipcode</Col>
              </Row>
              <Row>
                <Col>addresinfo1</Col>
              </Row>
              <Row>
                <Col>addressinfo2</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>Amazon points</Col>
              </Row>
              <Row>
                <Col>point balance</Col>
              </Row>
              <Row>
                <Col>point use inout</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default PaymentMethodSection;
