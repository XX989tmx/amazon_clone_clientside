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
const ItemOfGame = (props) => {
  let itemOfGame = ["テレビゲーム", "PCゲーム", "ゲームダウンロード"];
  return (
    <Row>
      <Col>
        <Row>
          <Col>ゲーム</Col>
        </Row>
        <Row>
          {itemOfGame.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfGame;
