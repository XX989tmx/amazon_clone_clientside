import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const CartMessage = (props) => {
  return (
    <Row>
      <Col>
        {props.IsDeletedItemMessage && "商品が削除されました"}{" "}
        {props.IsUpdatedItemMessage && "商品点数が更新されました"}
      </Col>
    </Row>
  );
};

export default CartMessage;
