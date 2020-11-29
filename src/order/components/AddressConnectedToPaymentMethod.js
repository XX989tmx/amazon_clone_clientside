import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const AddressConnectedToPaymentMethod = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>お支払い方法に紐付いた住所</Col>
        </Row>
        <Row>
          <Col>name</Col>
        </Row>
        <Row>
          <Col>zipcode</Col>
        </Row>
        <Row>
          <Col>addresinfo1</Col>
        </Row>
        <Row>
          <Col>addressinfo2</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AddressConnectedToPaymentMethod;
