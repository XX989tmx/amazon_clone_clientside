import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const CartMessage = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={12}>
            {props.IsDeletedItemMessage && "商品が削除されました"}
          </Col>
          <Col xs={12}>
            {props.IsUpdatedItemMessage && "商品点数が更新されました"}
          </Col>
        </Row>{" "}
      </Col>
    </Row>
  );
};

export default CartMessage;
