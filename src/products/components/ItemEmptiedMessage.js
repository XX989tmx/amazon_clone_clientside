import React from "react";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Alert,
} from "react-bootstrap";
const ItemEmptiedMessage = (props) => {
  return (
    <Row>
      <Col xs={12}>
        {props.IsCartEmptiedMessage && (
          <Alert variant={"warning"}>カートが空になりました</Alert>
        )}
      </Col>
    </Row>
  );
};

export default ItemEmptiedMessage;
