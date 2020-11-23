import React from 'react';
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const SameCategoriesOtherProducts = (props) => {
    return (
        <Row>
        <Col xs={12} md={6} lg={4} style={{ height: "100px" }}>
          <Row style={{ height: "100%" }}>
            <Col xs={4} lg={3}>
              pic
            </Col>
            <Col xs={8} lg={9}>
              <Row>
                <Col>name</Col>
              </Row>
              <Row>
                <Col>review</Col>
              </Row>
              <Row>
                <Col>price</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={4} style={{ height: "100px" }}>
          <Row style={{ height: "100%" }}>
            <Col xs={4} lg={3}>
              pic2
            </Col>
            <Col xs={8} lg={9}>
              <Row>
                <Col>name</Col>
              </Row>
              <Row>
                <Col>review</Col>
              </Row>
              <Row>
                <Col>price</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={4} style={{ height: "100px" }}>
          <Row style={{ height: "100%" }}>
            <Col xs={4} lg={3}>
              pic3
            </Col>
            <Col xs={8} lg={9}>
              <Row>
                <Col>name</Col>
              </Row>
              <Row>
                <Col>review</Col>
              </Row>
              <Row>
                <Col>price</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
}

export default SameCategoriesOtherProducts;
