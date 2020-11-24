import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import AcquirablePoints from "./AcquirablePoints";
import PriceOfProduct from "./PriceOfProduct";
import StockStatus from "./StockStatus";
const ProductPriceRelatedSection = (props) => {
  return (
    <Row>
      <Col>
        <PriceOfProduct price={props.price}/>
        <AcquirablePoints />
        <StockStatus />
      </Col>
    </Row>
  );
};

export default ProductPriceRelatedSection;
