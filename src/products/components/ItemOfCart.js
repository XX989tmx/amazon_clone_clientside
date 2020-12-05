import Axios from "axios";
import React, { useContext, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import ActionSectionOfCartItem from "./ActionSectionOfCartItem";
import ProductImageOfCartItem from "./ProductImageOfCartItem";
import ProductNameOfCartItem from "./ProductNameOfCartItem";
import ProductPriceOfCart from "./ProductPriceOfCart";

const ItemOfCart = (props) => {
  const auth = useContext(AuthContext);

  return (
    <Col
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      style={{ height: "100%", padding: "10px 25px 10px 25px" }}
    >
      <Link to={`/product/${props.id}`}>
        {" "}
        <ProductImageOfCartItem
          image={props.images[0] ? props.images[0] : ""}
        />
        <ProductNameOfCartItem name={props.name} />
        <ProductPriceOfCart price={props.price} />
      </Link>
      <ActionSectionOfCartItem
        quantity={props.quantity}
        cartItemId={props.cartItemId}
        changeCartHandler={props.changeCartHandler}
        stockQuantity={props.stockQuantity}
        deleteItemFromCartMessageHandler={
          props.deleteItemFromCartMessageHandler
        }
        updateCartItemMessageHandler={props.updateCartItemMessageHandler}
      />
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
