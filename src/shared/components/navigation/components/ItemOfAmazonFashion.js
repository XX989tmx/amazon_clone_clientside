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
const ItemOfAmazonFashion = (props) => {
  let itemOfAmazonFashion = [
    "レディース",
    "メンズ",
    "キッズ＆ベビー",
    "バッグ、スーツケース",
    "スポーツウェア＆シューズ",
    "Prime Wardrobe",
    "The Drop",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>Amazon Fashion</Col>
        </Row>
        <Row>
          {itemOfAmazonFashion.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfAmazonFashion;
