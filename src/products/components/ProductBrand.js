import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductBrand = (props) => {
  return (
    <Row>
      <Col>
        <Link to={`/product/brand/${props.brand}`}> {props.brand}</Link>
      </Col>
    </Row>
  );
};

export default ProductBrand;
