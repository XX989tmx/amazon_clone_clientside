import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import DeliveryDateAndStatusSection from "./DeliveryDateAndStatusSection";
import OrderedItems from "./OrderedItems";
const OrderHistoryItemMain = (props) => {
  return (
    <Col xs={8} md={9}>
      <DeliveryDateAndStatusSection />
      {props.items.map((v, i) => (
        <OrderedItems
          id={v.id}
          quantity={v.quantity}
          name={v.productId.name}
          price={v.productId.price}
          images={v.productId.images}
          brand={v.productId.brand}
          seller={v.productId.seller}
        />
      ))}
    </Col>
  );
};

export default OrderHistoryItemMain;
