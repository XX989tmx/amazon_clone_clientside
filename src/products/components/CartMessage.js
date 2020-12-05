import React from "react";
import ItemDeletedMessage from "./ItemDeletedMessage";
import ItemUpdatedMessage from "./ItemUpdatedMessage";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const CartMessage = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={12}>
            {props.isAddedItemMessage && "商品が追加されました。"}
          </Col>
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
