import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import AddressSectionHeading from "./AddressSectionHeading";
import ShipmentAddress from "./ShipmentAddress";
const AddressSection = (props) => {
  return (
    <Col xs={12} lg={4}>
      <AddressSectionHeading />
      <ShipmentAddress Address={props.Address} />
    </Col>
  );
};

export default AddressSection;
