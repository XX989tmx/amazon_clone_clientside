import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentsOfCart from "./ContentsOfCart";
import GoToCheckoutButton from "./GoToCheckoutButton";
import SumOfPriceOfCartItems from "./SumOfPriceOfCartItems";

const CartSectionOfSpecificProduct = (props) => {
  return (
    <Col md={2} lg={2} xl={2}>
      cart side bar
      <SumOfPriceOfCartItems />
      <GoToCheckoutButton />
      <ContentsOfCart />
    </Col>
  );
};

export default CartSectionOfSpecificProduct;
