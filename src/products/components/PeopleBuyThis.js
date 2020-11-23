import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PeopleBuyThis = (props) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: "100%" }}>
        <Row>
          <Col xs={8} lg={9}>
            people buy this too
          </Col>{" "}
          <Col xs={4} lg={3}>
            ページ n / n
          </Col>
        </Row>
        <Row>
          <Col xs={1}>p</Col>
          <Col xs={10}>
            <Row>
              <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                <Row>
                  <Col style={{ height: "200px" }}>prodImage</Col>
                </Row>
                <Row>
                  <Col>text</Col>
                </Row>
                <Row>
                  <Col>star</Col>
                  <Col>review</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                  <Col>icon</Col>
                </Row>
              </Col>
              <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                <Row>
                  <Col style={{ height: "200px" }}>prodImage</Col>
                </Row>
                <Row>
                  <Col>text</Col>
                </Row>
                <Row>
                  <Col>star</Col>
                  <Col>review</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                  <Col>icon</Col>
                </Row>
              </Col>
              <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                <Row>
                  <Col style={{ height: "200px" }}>prodImage</Col>
                </Row>
                <Row>
                  <Col>text</Col>
                </Row>
                <Row>
                  <Col>star</Col>
                  <Col>review</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                  <Col>icon</Col>
                </Row>
              </Col>
              <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                <Row>
                  <Col style={{ height: "200px" }}>prodImage</Col>
                </Row>
                <Row>
                  <Col>text</Col>
                </Row>
                <Row>
                  <Col>star</Col>
                  <Col>review</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                  <Col>icon</Col>
                </Row>
              </Col>
              <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                <Row>
                  <Col style={{ height: "200px" }}>prodImage</Col>
                </Row>
                <Row>
                  <Col>text</Col>
                </Row>
                <Row>
                  <Col>star</Col>
                  <Col>review</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                  <Col>icon</Col>
                </Row>
              </Col>
              <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                <Row>
                  <Col style={{ height: "200px" }}>prodImage</Col>
                </Row>
                <Row>
                  <Col>text</Col>
                </Row>
                <Row>
                  <Col>star</Col>
                  <Col>review</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                  <Col>icon</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={1}>n</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PeopleBuyThis;
