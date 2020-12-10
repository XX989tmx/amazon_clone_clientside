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
const ItemOfFoodAndBeverage = (props) => {
  let itemOfFoodAndBeverage = [
    "Amazonブランド",
    "グルメギフト",
    "お買い得情報",
    "Nipponストア（ご当地グルメ、特産品）",
    "おとなセレクト",
    "パントリー",
    "Amazon定期おトク便",
    "バーチャルダッシュ",
    "Amazon Dash Replenishment",
    "出前特集",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>食品＆飲料</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to={`/product/index/parentCategory/すべての食品＆飲料`}>
              すべての食品＆飲料
            </Link>
          </Col>
          {itemOfFoodAndBeverage.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfFoodAndBeverage;
