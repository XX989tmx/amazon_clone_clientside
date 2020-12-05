import React, { useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";

const QuantityChangeSelector = (props) => {
  // 数量はStateで管理。デフォ１
  const [Quantity, setQuantity] = useState(props.quantity);

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <Col md={12} lg={6}>
      <select value={Quantity} onChange={quantityChangeHandler}>
        {props.StockQuantityOptions}
      </select>
    </Col>
  );
};

export default QuantityChangeSelector;
