import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const OrderHistoryItemAction = (props) => {
  return (
    <Col xs={4} md={3}>
      <Row>
        <Col>
          <Button>配送状況を確認</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>商品の返品</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button>商品レビューを書く</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>注文を非表示にする</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default OrderHistoryItemAction;
