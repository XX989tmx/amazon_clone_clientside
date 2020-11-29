import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import AddressInfo1 from "./AddressInfo1";
import AddressInfo2 from "./AddressInfo2";
import NameOfAddress from "./NameOfAddress";
import PhoneNumber from "./PhoneNumber";
import Zipcode from "./Zipcode";
const ShipmentAddress = (props) => {
  return (
    <Row>
      <Col>
        <NameOfAddress name={props.Address.name} />
        <Zipcode zipCode={props.Address.zipCode} />
        <AddressInfo1 addressInfo1={props.Address.addressInfo1} />
        <AddressInfo2 addressInfo2={props.Address.addressInfo2} />
        <PhoneNumber phoneNumber={props.Address.phoneNumber} />
      </Col>
    </Row>
  );
};

export default ShipmentAddress;
