import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import AcquirablePoint from "./AcquirablePoint";
import PriceOfProduct from "./PriceOfProduct";
import ProductName from "./ProductName";
import Quantity from "./Quantity";
import Seller from "./Seller";
const ProductInformationSection = (props) => {
  return (
    <Col xs={8} style={{ height: "200px" }}>
      <ProductName name={props.name} />
      <PriceOfProduct price={props.price} />
      <AcquirablePoint price={props.price}/>
      <Quantity quantity={props.quantity} />
      <Seller />
    </Col>
  );
};

export default ProductInformationSection;
