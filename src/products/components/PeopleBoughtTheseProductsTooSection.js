import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PeopleBoughtTheseProductsTooSection = (props) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: "100%" }}>
        <Row style={{ height: "100px" }}>
          <Col>prodPic1</Col>+<Col>prodPic2</Col>+<Col>prodPic3</Col>
        </Row>
        <Row style={{ height: "100px" }}>
          <Col>
            <Row>name1</Row>
            <Row>price1</Row>
          </Col>
          +
          <Col>
            <Row>name2</Row>
            <Row>price2</Row>
          </Col>
          +
          <Col>
            <Row>name3</Row>
            <Row>price3</Row>
          </Col>
        </Row>
        <Row style={{ height: "100px" }}>
          <Col xs={{ span: 8, offset: 2 }}>
            <Row>
              <Col>総額</Col>
            </Row>
            <Row>
              <Col>ポイントの合計</Col>
            </Row>
            <Row>
              <Col>
                <Button>全点カートに入れる</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PeopleBoughtTheseProductsTooSection;
