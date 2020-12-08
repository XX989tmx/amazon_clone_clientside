import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfPet = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ペット</Col>
        </Row>
        <Row>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfPet;
