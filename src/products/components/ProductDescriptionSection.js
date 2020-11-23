import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDescriptionSection = (props) => {
  return (
    <Col
      xs={7}
      lg={4}
      style={{
        height: "500px",
      }}
    >
      <Row>
        <Col xs={12} style={{ height: "40px" }}>
          title
        </Col>
      </Row>
      <Row>
        <Col>brand</Col>
      </Row>
      <Row>
        <Col>reqiew</Col>
      </Row>
      <Row>
        <Col>price</Col>
      </Row>
      <Row>
        <Col>description</Col>
      </Row>
    </Col>
  );
};

export default ProductDescriptionSection;
