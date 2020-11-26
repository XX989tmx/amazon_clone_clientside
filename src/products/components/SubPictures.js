import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const SubPictures = (props) => {
  return (
    <Row>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic1
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic2
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic3
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic4
      </Col>
      <Col xs={6} sm={6} md={6} lg={2} style={{ height: "100px" }}>
        pic5
      </Col>
    </Row>
  );
};

export default SubPictures;
