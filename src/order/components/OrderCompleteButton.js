import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderCompleteButton = (props) => {
  return (
    <Row>
      <Col>
        <Link>
          {" "}
          <Button> 注文を確定する</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default OrderCompleteButton;
