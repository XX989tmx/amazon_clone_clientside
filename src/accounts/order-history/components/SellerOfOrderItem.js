import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const SellerOfOrderItem = (props) => {
  return (
    <Row>
      <Col>{props.sellerName ? props.sellerName : ""}</Col>
    </Row>
  );
};

export default SellerOfOrderItem;
