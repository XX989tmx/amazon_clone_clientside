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
const ItemOfBookComicAudible = (props) => {
  let itemOfBookComicAudible = ["買い取りサービス"];
  return (
    <Row>
      <Col>
        <Row>
          <Col>本、コミック、雑誌＆Audible</Col>
        </Row>
        <Row>
          {itemOfBookComicAudible.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfBookComicAudible;
