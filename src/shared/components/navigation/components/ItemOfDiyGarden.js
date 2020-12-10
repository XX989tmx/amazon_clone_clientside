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
const ItemOfDiyGarden = (props) => {
  let itemOfDiyGarden = [
    "電動工具",
    "作業工具",
    "リフォーム",
    "ガーデン",
    "エクステリア",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>DIY、工具、ガーデン</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべてのDIY、工具、ガーデン`}
            >
              すべてのDIY、工具、ガーデン
            </Link>
          </Col>
          {itemOfDiyGarden.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDiyGarden;
