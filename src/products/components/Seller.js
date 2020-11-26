import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Seller = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Link> seller</Link>
      </Col>
    </Row>
  );
};

export default Seller;
