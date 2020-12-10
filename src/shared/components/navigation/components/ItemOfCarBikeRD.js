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
const ItemOfCarBikeRD = (props) => {
  let itemOfCarBikeRD = [
    "カー用品",
    "バイク用品",
    "自動車＆バイク車体",
    "DIY、工具、ガーデン",
    "安全、保護用品",
    "工業機器",
    "研究開発用品",
    "衛生、清潔用品",
    "Amazonビジネス（法人購買、請求書払い、法人割引）",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>車、バイク、産業、研究開発</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべての産業、研究開発用品`}
            >
              すべての産業、研究開発用品
            </Link>
          </Col>
          {itemOfCarBikeRD.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfCarBikeRD;
