import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { calculateAcquirableAmazonPoint } from "../../shared/functions/utility-functions";

const AcquirablePointsInPurchaseAction = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>{calculateAcquirableAmazonPoint(props.price)} pt</Col>
    </Row>
  );
};

export default AcquirablePointsInPurchaseAction;
