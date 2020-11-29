import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import ProductImageSection from "./ProductImageSection";
import ProductInformationSection from "./ProductInformationSection";
const CartItem = (props) => {
  return (
    <Col xs={12} style={{ height: "200px" }}>
      <Row>
        <ProductImageSection imageUrl={!!props.images[0] && props.images[0].imageUrl}/>
        <ProductInformationSection
          id={props.id}
          name={props.name}
          price={props.price}
          quantity={props.quantity}
        />
      </Row>
    </Col>
  );
};

export default CartItem;
