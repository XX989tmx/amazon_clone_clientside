import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const AccountControlSection = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>トップ</Col>
        </Row>
        <Row>
          <Col>注文履歴</Col>
        </Row>
        <Row>
          <Col>欲しいものリスト</Col>
        </Row>
        <Row>
          <Col>アカウントリスト</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AccountControlSection;
