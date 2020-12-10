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
const ItemOfUsedItemStore = (props) => {
  let itemOfUsedItemStore = [
    "中古カメラ、ビデオカメラ",
    "中古AV機器、携帯電話",
    "Amazon Launchpad",
    "買い取りサービス",
    "Alexaスマートホーム",
    "Amazon Dash Replenishment",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>中古ストア</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to={`/product/index/parentCategory/すべての中古?page=1`}>
              すべての中古
            </Link>
          </Col>
          {itemOfUsedItemStore.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfUsedItemStore;
