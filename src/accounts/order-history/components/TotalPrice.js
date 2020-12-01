import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { modifyPriceToJPYLocale } from "../../../shared/functions/utility-functions";

const TotalPrice = (props) => {
  return (
    <Row>
      <Col>{modifyPriceToJPYLocale(props.totalPrice)} 円</Col>
    </Row>
  );
};

export default TotalPrice;
