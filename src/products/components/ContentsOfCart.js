import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import ItemOfCart from "./ItemOfCart";
const ContentsOfCart = (props) => {
  return (
    <Row>
      <ItemOfCart />
    </Row>
  );
};

export default ContentsOfCart;
