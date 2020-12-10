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
const ItemOfDvdBluelay = (props) => {
  let ItemOfDvdBluelay = [
    "DVD",
    "ブルーレイ",
    "Amazonビデオ",
    "ミュージック",
    "デジタルミュージック",
    "楽器",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>DVD、Blue-Ray</Col>
        </Row>
        <Row>
          {ItemOfDvdBluelay.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDvdBluelay;
