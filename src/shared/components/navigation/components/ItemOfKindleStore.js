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
const ItemOfKindleStore = (props) => {
  let itemOfKindleStore = [
    "Kindle本",
    "Kindleコミック",
    "Kindle洋書",
    "Kindle Unlimited",
    "Prime Reading",
  ];
  return (
    <Row>
      <Col>
        <Row>
          <Col>Kindleストア</Col>
        </Row>
        <Row>
          {itemOfKindleStore.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}?page=1`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfKindleStore;
