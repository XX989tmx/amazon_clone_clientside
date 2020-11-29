import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductImageSectionOfOrderItem = (props) => {
  return (
    <Col md={2}>
      <Row>
        <Col style={{ height: "120px" }}>image</Col>
      </Row>
    </Col>
  );
};

export default ProductImageSectionOfOrderItem;
