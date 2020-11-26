import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ProductTitle = (props) => {
  return (
    <Row>
      <Col xs={12} style={{ height: "40px" }}>
        {props.name}
      </Col>
    </Row>
  );
};

export default ProductTitle;
