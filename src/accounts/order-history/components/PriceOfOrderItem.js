import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { modifyPriceToJPYLocale } from "../../../shared/functions/utility-functions";

const PriceOfOrderItem = (props) => {
  return (
    <Row>
      <Col>{modifyPriceToJPYLocale(props.price)} 円</Col>
    </Row>
  );
};

export default PriceOfOrderItem;
