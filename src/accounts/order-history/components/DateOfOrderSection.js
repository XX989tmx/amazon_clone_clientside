import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import DateOfOrder from "./DateOfOrder";
import DateOfOrderParagraph from "./DateOfOrderParagraph";
const DateOfOrderSection = (props) => {
  return (
    <Col xs={6} lg={2}>
      <DateOfOrderParagraph />
      <DateOfOrder />
    </Col>
  );
};

export default DateOfOrderSection;
