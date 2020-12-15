import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const StockQuantityInput = (props) => {
  const [ProductStockQuantity, setProductStockQuantity] = useState();
  const inputChangeHandler = (event) => {
    setProductStockQuantity(event.target.value);
    props.stockQuantityChangeHandler(ProductStockQuantity);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            在庫数
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <input
              type="number"
              value={ProductStockQuantity}
              onChange={inputChangeHandler}
              placeholder="1"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default StockQuantityInput;
