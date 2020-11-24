import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ActionSectionOfCartItem from "./ActionSectionOfCartItem";
import ProductImageOfCartItem from "./ProductImageOfCartItem";
import ProductNameOfCartItem from "./ProductNameOfCartItem";
import ProductPriceOfCart from "./ProductPriceOfCart";
const ItemOfCart = (props) => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: "100%", padding: "10px 25px 10px 25px" }}>
      <ProductImageOfCartItem />
      <ProductNameOfCartItem name={props.name}/>
      <ProductPriceOfCart price={props.price}/>
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
