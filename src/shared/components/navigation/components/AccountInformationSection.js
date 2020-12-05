import React from "react";
import reactBootstrap, {
  Col,
  Row,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
const AccountInformationSection = (props) => {
  return (
    <Col xs={12} md={12} xl={4}>
      <Row>
        <Col xs={1}></Col>
        <Col xs={5}>
          <span>sdadsdasadssan</span>
          <br /> アカウントリスト
        </Col>
        <Col xs={3}>注文履歴</Col>
        <Col xs={3}>カート</Col>
      </Row>
    </Col>
  );
};

export default AccountInformationSection;
