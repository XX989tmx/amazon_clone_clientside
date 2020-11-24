import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import BrandOfProduct from "./BrandOfProduct";
import ProductName from "./ProductName";
const ProductNameAndBrand = (props) => {
  return (
    <Row>
      <Col>
        <ProductName name={props.name}/>
        <BrandOfProduct brand={props.brand}/>
      </Col>
    </Row>
  );
};

export default ProductNameAndBrand;
