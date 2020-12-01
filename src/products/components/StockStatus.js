import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const StockStatus = (props) => {
  return (
    <Row>
      <Col>{props.isStock ? "在庫有り" : "在庫切れ"}</Col>
    </Row>
  );
};

export default StockStatus;
