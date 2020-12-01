import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { getJapanDateAndTime } from "../../../shared/functions/utility-functions";

const DateOfOrder = (props) => {
  return (
    <Row>
      <Col>{getJapanDateAndTime(props.dateOrdered)}</Col>
    </Row>
  );
};

export default DateOfOrder;
