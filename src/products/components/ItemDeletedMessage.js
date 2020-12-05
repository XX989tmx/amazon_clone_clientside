import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ItemDeletedMessage = (props) => {
  return (
    <Col xs={12}>{props.IsDeletedItemMessage && "商品が削除されました"}</Col>
  );
};

export default ItemDeletedMessage;
