import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AddToCartButtonInPurchaseAction = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Button> add to cart</Button>
      </Col>
    </Row>
  );
};

export default AddToCartButtonInPurchaseAction;
