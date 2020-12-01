import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import TotalPrice from "./TotalPrice";
import TotalPriceParagraph from "./TotalPriceParagraph";
const TotalPriceSection = (props) => {
  return (
    <Col xs={6} lg={2}>
      <TotalPriceParagraph />
      <TotalPrice totalPrice={props.totalPrice}/>
    </Col>
  );
};

export default TotalPriceSection;
