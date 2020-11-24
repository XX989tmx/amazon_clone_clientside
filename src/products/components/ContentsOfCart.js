import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ContentsOfCart = (props) => {
  return (
    <Row>
      rendering contents of cart{" "}
      <Col>
        {props.CartItems.map((v, i) => (
          <Row>
            {" "}
            <Col> {v.productId.name}</Col> <Col>{v.productId.price}</Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default ContentsOfCart;
