import React from "react";
import ItemDeletedMessage from "./ItemDeletedMessage";
import ItemUpdatedMessage from "./ItemUpdatedMessage";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const CartMessage = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <ItemDeletedMessage
            IsDeletedItemMessage={props.IsDeletedItemMessage}
          />
          <ItemUpdatedMessage
            IsUpdatedItemMessage={props.IsUpdatedItemMessage}
          />
        </Row>{" "}
      </Col>
    </Row>
  );
};

export default CartMessage;
