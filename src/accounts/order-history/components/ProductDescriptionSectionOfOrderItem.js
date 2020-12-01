import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import BuyAgainButton from "./BuyAgainButton";
import NameOfOrderItem from "./NameOfOrderItem";
import PriceOfOrderItem from "./PriceOfOrderItem";
import SellerOfOrderItem from "./SellerOfOrderItem";
const ProductDescriptionSectionOfOrderItem = (props) => {
  return (
    <Col md={10}>
      <NameOfOrderItem name={props.name}/>
      <SellerOfOrderItem sellerName={props.sellerName}/>
      <PriceOfOrderItem price={props.price}/>
      <BuyAgainButton />
    </Col>
  );
};

export default ProductDescriptionSectionOfOrderItem;
