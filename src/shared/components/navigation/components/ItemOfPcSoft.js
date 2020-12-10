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
const ItemOfPcSoft = (props) => {
  let ItemOfPcSoft = [
    "ビジネス、オフィス",
    "セキュリティ",
    "画像、映像制作",
    "PCゲーム",
    "ダウンロード版",
    "PCソフト定期購入",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>PCソフト</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべてのパソコン、周辺機器?page=1`}
            >
              すべてのパソコン、周辺機器
            </Link>
          </Col>
          {ItemOfPcSoft.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfPcSoft;
