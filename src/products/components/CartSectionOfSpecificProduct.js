import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartSectionOfSpecificProduct = (props) => {
  return (
    <Col md={2} lg={2} xl={2}>
      cart side bar
      <Row>
        <Col>小計</Col>
        <Col>sum</Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button>レジに進む</Button>
        </Col>
      </Row>
      <Row></Row>
    </Col>
  );
};

export default CartSectionOfSpecificProduct;
