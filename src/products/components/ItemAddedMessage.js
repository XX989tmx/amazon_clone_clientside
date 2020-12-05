import React from "react";
import reactBootstrap, { Row, Col, Container, Button, Alert } from "react-bootstrap";
const ItemAddedMessage = (props) => {
  return (
    <Col xs={12}>
      {props.isAddedItemMessage && (
        <Alert variant={"success"}>商品が追加されました</Alert>
      )}{" "}
    </Col>
  );
};

export default ItemAddedMessage;
