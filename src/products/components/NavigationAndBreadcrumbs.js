import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const NavigationAndBreadcrumbs = (props) => {
  return (
    <Row>
      <Col xs={12} md={8} lg={7}>
        検索結果 total item countのうち、1-last page件。bread crums
      </Col>
      <Col xs={12} md={4} lg={5}>
        narabekae
      </Col>
    </Row>
  );
};

export default NavigationAndBreadcrumbs;
