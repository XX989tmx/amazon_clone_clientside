import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfSportsOutdoor = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>スポーツ＆アウトドア</Col>
        </Row>
        <Row>
          <Col xs={12}>すべてのスポーツ＆アウトドア</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfSportsOutdoor;