import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const EmptyCartButton = (props) => {
  const emptyButtonHandler = (event) => {
    props.emptyCartHandler();
  };

  return (
    <Row>
      <Col>
        <Button onClick={emptyButtonHandler}>カートを空にする</Button>
      </Col>
    </Row>
  );
};

export default EmptyCartButton;
