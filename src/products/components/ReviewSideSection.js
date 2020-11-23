import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewSideSection = (props) => {
  return (
    <Col xs={12} md={3} lg={3}>
      <Row>
        <Col>カスタマーレビュー</Col>
      </Row>
      <Row>
        <Col>star</Col>
        <Col>星N中N</Col>
      </Row>
      <Row>
        <Col>N件の評価</Col>
      </Row>
      <Row>
        <Col style={{ height: "300px" }}>review stats</Col>
      </Row>
      <Row>
        <Col>この商品をレビュー</Col>
      </Row>
      <Row>
        <Col>他のお客様にも意見を伝えましょう</Col>
      </Row>
      <Row>
        <Col>
          <Link>
            {" "}
            <Button>カスタマーレビューを書く</Button>
          </Link>{" "}
        </Col>
      </Row>
    </Col>
  );
};

export default ReviewSideSection;
