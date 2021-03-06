import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import AcquirablePointsOfOrder from "./AcquirablePointsOfOrder";
const AcquirablePointSection = (props) => {
  return (
    <Row>
      <Col>獲得ポイント</Col>
      <AcquirablePointsOfOrder TotalPrice={props.TotalPrice} />
    </Row>
  );
};

export default AcquirablePointSection;
