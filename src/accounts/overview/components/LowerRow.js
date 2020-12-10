import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const LowerRow = (props) => {
  return (
    <Row>
      <Col xs={12} md={6} lg={4}>
        <Link to={`/account/addresses`}>
          {" "}
          <Row>
            <Col xs={2} md={3}>
              img
            </Col>
            <Col xs={10} md={9}>
              <Row>
                <Col>アドレス帳</Col>
              </Row>
              <Row>
                <Col>登録住所の追加変更</Col>
              </Row>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Link to={`/account/your-payments/payment-methods`}>
          {" "}
          <Row>
            <Col xs={2} md={3}>
              img
            </Col>
            <Col xs={10} md={9}>
              <Row>
                <Col>お客様の支払い方法</Col>
              </Row>
              <Row>
                <Col>支払い方法と設定の管理、残高とオファーの表示</Col>
              </Row>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Row>
          <Col xs={2} md={3}>
            img
          </Col>
          <Col xs={10} md={9}>
            <Row>
              <Col>AmazonCredit</Col>
            </Row>
            <Row>
              <Col>残高の確認、クレジットの登録</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LowerRow;
