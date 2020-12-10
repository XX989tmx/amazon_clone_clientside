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
const ItemOfAudible = (props) => {
  let itemOfAudible = [
    "Audible オーディオブック",
    "Audible　会員プラン無料体験",
    "買い取りサービス",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>Audibleオーディオブック</Col>
        </Row>
        <Row>
          {itemOfAudible.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfAudible;
