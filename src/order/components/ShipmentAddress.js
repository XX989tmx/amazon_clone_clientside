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
        <NameOfAddress />
        <Zipcode />
        <AddressInfo1 />
        <AddressInfo2 />
        <PhoneNumber />
      </Col>
    </Row>
  );
};

export default ShipmentAddress;
