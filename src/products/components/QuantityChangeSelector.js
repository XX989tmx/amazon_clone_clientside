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
        <option>{props.quantity}</option>
        <option>数量:n</option>
        <option>数量:n</option>
      </select>
    </Col>
  );
};

export default QuantityChangeSelector;
