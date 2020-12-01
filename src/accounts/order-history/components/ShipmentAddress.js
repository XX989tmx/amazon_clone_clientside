import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const ShipmentAddress = (props) => {
  return (
    <Row>
      <Col>
        {props.nameOfShipmentAddress ? props.nameOfShipmentAddress : ""}
      </Col>
    </Row>
  );
};

export default ShipmentAddress;
