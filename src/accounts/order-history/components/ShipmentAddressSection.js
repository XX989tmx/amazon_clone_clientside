import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ShipmentAddress from "./ShipmentAddress";
import ShipmentAddressParagraph from "./ShipmentAddressParagraph";
const ShipmentAddressSection = (props) => {
  return (
    <Col xs={6} lg={4}>
      <ShipmentAddressParagraph />
      <ShipmentAddress />
    </Col>
  );
};

export default ShipmentAddressSection;
