import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductExplanation = (props) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: "100%" }}>
        syouhinnnosetumei
        <Row>
          <Col xs={12}>title</Col>{" "}
        </Row>
        <Row>
          <Col xs={12}>weight info</Col>{" "}
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} style={{ height: "300px" }}>
            info1
          </Col>
          <Col xs={12} sm={6} md={6} style={{ height: "300px" }}>
            info2
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductExplanation;
