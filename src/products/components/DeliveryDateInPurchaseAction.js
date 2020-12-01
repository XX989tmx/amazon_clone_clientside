import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { japanTimeDefaultFormat } from "../../shared/functions/utility-functions";

const DeliveryDateInPurchaseAction = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        {japanTimeDefaultFormat(props.deliveryDate)}
      </Col>
    </Row>
  );
};

export default DeliveryDateInPurchaseAction;
