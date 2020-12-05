import React, { useEffect, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { createStockQuantityOptions } from "../../shared/functions/utility-functions";

const QuantityChangeSelector = (props) => {
  // 数量はStateで管理。デフォ１
  const [Quantity, setQuantity] = useState(props.quantity);
  const [StockQuantityOptions, setStockQuantityOptions] = useState();

  useEffect(() => {
    const iffy = (params) => {
      const stockQuantityOptions = createStockQuantityOptions(
        props.stockQuantity
      );
      setStockQuantityOptions(stockQuantityOptions);
    };
    iffy();
  }, []);

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <Col md={12} lg={6}>
      <select value={Quantity} onChange={quantityChangeHandler}>
        {StockQuantityOptions}
      </select>
    </Col>
  );
};

export default QuantityChangeSelector;
