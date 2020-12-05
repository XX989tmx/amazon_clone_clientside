import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const CartItemTotalCount = (props) => {
  return (
    <Row>
      <Col>
        {props.TotalCountOfCart ? props.TotalCountOfCart : 0}{" "}
        点の商品がカートに入っています
      </Col>
    </Row>
  );
};

export default CartItemTotalCount;
