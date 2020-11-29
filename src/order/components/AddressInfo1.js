import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
const AddressInfo1 = (props) => {
  return (
    <Row>
      <Col>{props.addressInfo1}</Col>
    </Row>
  );
};

export default AddressInfo1;
