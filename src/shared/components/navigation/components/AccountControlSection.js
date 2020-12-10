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
const AccountControlSection = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Link to="/home">トップ</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={`/account/order-history`}>注文履歴</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/account/wishlists/all">欲しいものリスト</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/account/overview">アカウントリスト</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AccountControlSection;
