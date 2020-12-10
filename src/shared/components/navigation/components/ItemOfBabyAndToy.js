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
const ItemOfBabyAndToy = (props) => {
  let itemOfBabyAndToy = [
    "ベビー＆マタニティ",
    "おもちゃ",
    "絵本、児童書",
    "ベビーレジストリ",
    "Amazonファミリー",
    "ホビー",
    "楽器",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>ベビー、おもちゃ、ホビー</Col>
        </Row>
        <Row>
          {itemOfBabyAndToy.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfBabyAndToy;
