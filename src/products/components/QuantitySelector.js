import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const QuantitySelector = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <select onChange={props.quantityChangeHandler}>
          <option>数量</option>
          {props.StockQuantityOptions}
        </select>
      </Col>
    </Row>
  );
};

export default QuantitySelector;
