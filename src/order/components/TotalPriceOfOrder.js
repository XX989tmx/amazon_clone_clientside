import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const TotalPriceOfOrder = (props) => {
  return <Col>{props.TotalPrice} 円</Col>;
};

export default TotalPriceOfOrder;
