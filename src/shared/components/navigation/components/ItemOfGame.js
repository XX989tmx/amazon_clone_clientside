import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfGame = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ゲーム</Col>
        </Row>
        <Row>
          <Col>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfGame;