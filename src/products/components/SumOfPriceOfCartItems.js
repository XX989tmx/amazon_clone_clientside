import React from 'react';
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const SumOfPriceOfCartItems = (props) => {
    return (
      <Row>
        <Col>小計</Col>
        <Col>{props.TotalPriceOfCart} 円</Col>
      </Row>
    );
}

export default SumOfPriceOfCartItems;
