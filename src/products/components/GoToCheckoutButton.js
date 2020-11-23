import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoToCheckoutButton = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <Link>
          {" "}
          <Button>レジに進む</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default GoToCheckoutButton;
