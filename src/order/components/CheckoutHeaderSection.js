import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import BreadcrumbsImage from "./BreadcrumbsImage";
import CheckoutHeading from "./CheckoutHeading";
import CheckoutHeadingParagraph from "./CheckoutHeadingParagraph";
const CheckoutHeaderSection = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <BreadcrumbsImage />
        <CheckoutHeading />
        <CheckoutHeadingParagraph />
      </Col>
    </Row>
  );
};

export default CheckoutHeaderSection;
