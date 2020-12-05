import React from "react";
import reactBootstrap, { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CartSection = (props) => {
  return (
    <Col xs={3}>
      {" "}
      <Link to="/cart">カート</Link>
    </Col>
  );
};

export default CartSection;
