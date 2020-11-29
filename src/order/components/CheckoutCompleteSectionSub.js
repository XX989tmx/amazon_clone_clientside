import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutCompleteSectionSub = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Link>
              {" "}
              <Button> 注文を確定する</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>tyuumonn explanation</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CheckoutCompleteSectionSub;
