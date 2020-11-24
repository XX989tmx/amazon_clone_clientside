import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import DeleteCartItemButton from "./DeleteCartItemButton";
import QuantityChangeSelector from "./QuantityChangeSelector";
const ActionSectionOfCartItem = (props) => {
  return (
    <Row>
      <QuantityChangeSelector />
      <DeleteCartItemButton />
    </Row>
  );
};

export default ActionSectionOfCartItem;
