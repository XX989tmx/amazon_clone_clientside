import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductDescriptionOfBuyAgainItem = (props) => {
  return (
    <Col xs={12} md={12}>
      <Row>
        <Col>name</Col>
      </Row>
      <Row>
        <Col>price</Col>
        <Col>icon</Col>
      </Row>
      <Row>
        <Col>
          <Button>カートに入れる</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductDescriptionOfBuyAgainItem;
