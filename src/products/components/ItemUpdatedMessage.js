import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ItemUpdatedMessage = (props) => {
  return (
    <Col xs={12}>
      {props.IsUpdatedItemMessage && "商品点数が更新されました"}
    </Col>
  );
};

export default ItemUpdatedMessage;
