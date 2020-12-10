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
const ItemOfPet = (props) => {
  let itemOfPet = ["ペット用品、ペットフード"];
  return (
    <Row>
      <Col>
        <Row>
          <Col>ペット</Col>
        </Row>
        <Row>
          {itemOfPet.map((v, i) => (
            <Col xs={12} key={i}>
              <Link to={`/product/index/childCategory/${v}`}>{v}</Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfPet;
