import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductImagesSection = (props) => {
  return (
    <Col xs={5} lg={5} style={{ height: "100%" }}>
      <Row>
        <Col xs={{ offset: 1, span: 10 }} style={{ height: "220px" }}>
          pic1
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
          pic2
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
          pic3
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
          pic4
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
          pic5
        </Col>
      </Row>
    </Col>
  );
};

export default ProductImagesSection;
