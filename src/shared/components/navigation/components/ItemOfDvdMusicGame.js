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
const ItemOfDvdMusicGame = (props) => {
  let itemOfDvdMusicGame = ["買い取りサービス"];
  return (
    <Row>
      <Col>
        <Row>
          <Col>DVD、ミュージック、ゲーム</Col>
        </Row>
        <Row>
          {itemOfDvdMusicGame.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDvdMusicGame;
