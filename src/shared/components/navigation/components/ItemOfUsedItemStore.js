import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfUsedItemStore = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>中古ストア</Col>
        </Row>
        <Row>
          <Col xs={12}>すべての中古</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfUsedItemStore;
