import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { modifyPriceToJPYLocale } from "../../shared/functions/utility-functions";

const ProductPriceOfCart = (props) => {
  return (
    <Row>
      <Col>{modifyPriceToJPYLocale(props.price)}</Col>
    </Row>
  );
};

export default ProductPriceOfCart;
