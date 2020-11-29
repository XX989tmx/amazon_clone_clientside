import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const SideSectionOfOrderHistory = (props) => {
  return (
    <Col xs={12} md={12} lg={2}>
      <Row>
        <Col>
          <Row>
            <Col>もう一度買う</Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default SideSectionOfOrderHistory;
