import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const OrderHistoryItemMain = (props) => {
  return (
    <Col xs={8} md={9}>
      <Row>
        <Col>
          <Row>
            <Col>配送日</Col>
          </Row>
          <Row>
            <Col>status</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col md={2}>
              <Row>
                <Col style={{ height: "120px" }}>image</Col>
              </Row>
            </Col>
            <Col md={10}>
              <Row>
                <Col>name</Col>
              </Row>
              <Row>
                <Col>seller</Col>
              </Row>
              <Row>
                <Col>price</Col>
              </Row>
              <Row>
                <Col>buy again button</Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <Row>
                <Col style={{ height: "120px" }}>image</Col>
              </Row>
            </Col>
            <Col md={10}>
              <Row>
                <Col>name</Col>
              </Row>
              <Row>
                <Col>seller</Col>
              </Row>
              <Row>
                <Col>price</Col>
              </Row>
              <Row>
                <Col>buy again button</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default OrderHistoryItemMain;
