import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ItemAddedMessage = (props) => {
  return (
    <Col xs={12}>{props.isAddedItemMessage && "商品が追加されました。"}</Col>
  );
};

export default ItemAddedMessage;
