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
const ItemOfDrink = (props) => {
  let itemOfDrink = [
    "ビール、発泡酒",
    "ワイン",
    "日本酒",
    "焼酎",
    "梅酒",
    "洋酒、リキュール",
    "チューハイ、カクテル",
    "ノンアルコール飲料",
    "winery direct(直輸入ワイン)",
    "Amazonソムリエ",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>お酒</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to={`/product/index/parentCategory/すべてのお酒?page=1`}>
              すべてのお酒
            </Link>
          </Col>
          {itemOfDrink.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDrink;
