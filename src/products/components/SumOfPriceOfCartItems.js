import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { modifyPriceToJPYLocale } from "../../shared/functions/utility-functions";

const SumOfPriceOfCartItems = (props) => {
  return (
    <Row>
      <Col>小計</Col>
      <Col>
        {props.TotalPriceOfCart
          ? modifyPriceToJPYLocale(props.TotalPriceOfCart)
          : 0}{" "}
        円
      </Col>
    </Row>
  );
};

export default SumOfPriceOfCartItems;
