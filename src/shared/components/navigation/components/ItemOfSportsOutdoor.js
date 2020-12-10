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
const ItemOfSportsOutdoor = (props) => {
  let itemOfSportsOutdoor = [
    "自転車",
    "アウトドア",
    "釣り",
    "フィットネス、トレーニング",
    "ゴルフ",
    "スポーツウェア＆シューズ",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>スポーツ＆アウトドア</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべてのスポーツ＆アウトドア?page=1`}
            >
              すべてのスポーツ＆アウトドア
            </Link>
          </Col>
          {itemOfSportsOutdoor.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfSportsOutdoor;
