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
const ItemOfOfficeItem = (props) => {
  let itemOfOfficeItem = [
    "文具、学用品",
    "事務用品",
    "筆記具",
    "ノート、メモ帳",
    "手帳、カレンダー",
    "オフィス家具",
    "オフィス機器",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>文房具、オフィス用品</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link
              to={`/product/index/parentCategory/すべての文房具、オフィス機器?page=1`}
            >
              すべての文房具、オフィス機器
            </Link>
          </Col>
          {itemOfOfficeItem.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfOfficeItem;
