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
          stockQuantity={v.productId.stockQuantity}
          changeCartHandler={props.changeCartHandler}
          deleteItemFromCartMessageHandler={
            props.deleteItemFromCartMessageHandler
          }
          updateCartItemMessageHandler={props.updateCartItemMessageHandler}
        />
      ))}
    </Row>
  );
};

export default ContentsOfCart;
