import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import DeleteCartItemButton from "./DeleteCartItemButton";
import QuantityChangeSelector from "./QuantityChangeSelector";
const ActionSectionOfCartItem = (props) => {
  return (
    <Row>
      <QuantityChangeSelector
        quantity={props.quantity}
        StockQuantityOptions={props.StockQuantityOptions}
      />
      <DeleteCartItemButton
        cartItemId={props.cartItemId}
        changeCartHandler={props.changeCartHandler}
      />
    </Row>
  );
};

export default ActionSectionOfCartItem;
