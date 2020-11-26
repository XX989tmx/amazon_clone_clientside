import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisteredAddress = (props) => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Link> your registered address</Link>
      </Col>
    </Row>
  );
};

export default RegisteredAddress;
