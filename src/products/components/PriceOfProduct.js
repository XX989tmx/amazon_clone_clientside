import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { modifyPriceToJPYLocale } from "../../shared/functions/utility-functions";

const PriceOfProduct = (props) => {
  return (
    <Row>
      <Col>{modifyPriceToJPYLocale(props.price)} 円</Col>
    </Row>
  );
};

export default PriceOfProduct;
