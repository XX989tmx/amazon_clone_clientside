import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const StockStatusInPurchaseAction = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        {props.isStock ? "在庫有り" : "在庫切れ"}
      </Col>
    </Row>
  );
};

export default StockStatusInPurchaseAction;
