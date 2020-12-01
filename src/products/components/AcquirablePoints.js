import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { calculateAcquirableAmazonPoint, modifyPriceToJPYLocale } from "../../shared/functions/utility-functions";

const AcquirablePoints = (props) => {
  return (
    <Row>
      <Col>{calculateAcquirableAmazonPoint(props.price)} pt</Col>
    </Row>
  );
};

export default AcquirablePoints;
