import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ActionSectionOfCartItem from "./ActionSectionOfCartItem";
import ProductImageOfCartItem from "./ProductImageOfCartItem";
import ProductNameOfCartItem from "./ProductNameOfCartItem";
import ProductPriceOfCart from "./ProductPriceOfCart";
const ItemOfCart = (props) => {
  return (
    <Col style={{ height: "100%", padding: "10px 25px 10px 25px" }}>
      <ProductImageOfCartItem />
      <ProductNameOfCartItem />
      <ProductPriceOfCart />
      <ActionSectionOfCartItem />
      {/* {props.CartItems.map((v, i) => (
          <Row>
            {" "}
            <Col> {v.productId.name}</Col> <Col>{v.productId.price}</Col>
          </Row>
        ))} */}
    </Col>
  );
};

export default ItemOfCart;
