import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
const PaginationSection = (props) => {
  return (
    <Row>
      <Col
        xs={{ offset: 2, span: 8 }}
        md={{ offset: 2, span: 8 }}
        lg={{ offset: 3, span: 6 }}
      >
        pagination
      </Col>
    </Row>
  );
};

export default PaginationSection;
