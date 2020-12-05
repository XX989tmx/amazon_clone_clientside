import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ItemOfCart from "./ItemOfCart";
const ContentsOfCart = (props) => {
  return (
    <Row>
      {props.CartItems.map((v, i) => (
        <ItemOfCart
          key={i}
          cartItemId={v.id}
          id={v.productId.id}
          name={v.productId.name}
          price={v.productId.price}
          images={v.productId.images}
          quantity={v.quantity}
          StockQuantityOptions={props.StockQuantityOptions}
          changeCartHandler={props.changeCartHandler}
        />
      ))}
    </Row>
  );
};

export default ContentsOfCart;
