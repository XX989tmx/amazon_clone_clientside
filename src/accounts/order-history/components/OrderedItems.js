import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import OrderedItem from "./OrderedItem";
const OrderedItems = (props) => {
  return (
    <Row>
      <Col>
        <OrderedItem
          id={props.id}
          quantity={props.quantity}
          name={props.name}
          price={props.price}
          images={props.images}
          brand={props.brand}
          seller={props.seller}
        />
      </Col>
    </Row>
  );
};

export default OrderedItems;
