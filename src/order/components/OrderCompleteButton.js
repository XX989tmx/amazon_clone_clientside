import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderCompleteButton = (props) => {
  const completeOrder = async (event) => {
    event.preventDefault()
    await props.completePurchaseHandler();
  };

  return (
    <Row>
      <Col>
        <Link>
          {" "}
          <Button onClick={completeOrder}> 注文を確定する</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default OrderCompleteButton;
