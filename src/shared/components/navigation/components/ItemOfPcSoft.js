import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfPcSoft = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>PCソフト</Col>
        </Row>
        <Row>
          <Col xs={12}>すべてのPCソフト</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfPcSoft;
