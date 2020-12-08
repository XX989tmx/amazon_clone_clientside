import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfPcAndDevice = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>パソコン、周辺機器</Col>
        </Row>
        <Row>
          <Col xs={12}>すべてのパソコン、周辺機器</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfPcAndDevice;
