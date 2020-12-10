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
const ItemOfBeautyStore = (props) => {
  let itemOfBeautyStore = [
    "ヘルスケア、スタイリング",
    "スキンケア",
    "メイクアップ、ネイル",
    "バス、ボディケア",
    "オーラルケア",
    "ラグジュアリービューティー",
    "ドクターズコスメ",
    "トライアルキット",
    "ブランド一覧",
    "ビューティーストアへ",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>ビューティーストア</Col>
        </Row>
        <Row>
          {itemOfBeautyStore.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfBeautyStore;
