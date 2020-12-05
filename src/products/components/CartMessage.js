import React from "react";
import ItemDeletedMessage from "./ItemDeletedMessage";
import ItemUpdatedMessage from "./ItemUpdatedMessage";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ItemAddedMessage from "./ItemAddedMessage";
const CartMessage = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <ItemAddedMessage isAddedItemMessage={props.isAddedItemMessage} />
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
