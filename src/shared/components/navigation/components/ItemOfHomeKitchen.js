import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfHomeKitchen = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ホーム＆キッチン</Col>
        </Row>
        <Row>
          <Col xs={12}>すべてのホーム＆キッチン</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfHomeKitchen;
