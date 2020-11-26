import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductPriceInPurchaseAction = (props) => {
  return (
    <Row>
      <Col
        xs={{ span: 8, offset: 2 }}
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        {props.price} 円
      </Col>
    </Row>
  );
};

export default ProductPriceInPurchaseAction;
