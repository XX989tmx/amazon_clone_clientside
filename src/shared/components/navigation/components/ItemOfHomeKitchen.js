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
const ItemOfHomeKitchen = (props) => {
  let itemOfHomeKitchen = [
    "キッチン用品、食器",
    "インテリア、雑貨",
    "カーペット、カーテン、クッション",
    "家具",
    "収納用品、収納家具",
    "布団、枕、シーツ",
    "掃除、洗濯、バス、トイレ",
    "防犯、防災",
    "家電",
    "手芸、画材",
    "ショールーム",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>ホーム＆キッチン</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to={`/product/index/parentCategory/すべてのホーム＆キッチン`}>
              すべてのホーム＆キッチン
            </Link>
          </Col>
          {itemOfHomeKitchen.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfHomeKitchen;
