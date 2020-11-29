import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import AmazonPointBalance from "./AmazonPointBalance";
import AmazonPointHeader from "./AmazonPointHeader";
import AmazonPointUseInput from "./AmazonPointUseInput";
const AmazonPointSection = (props) => {
  return (
    <Col>
      <Row>
        <Col>
          <AmazonPointHeader />
          <AmazonPointBalance />
          <AmazonPointUseInput />
        </Col>
      </Row>
    </Col>
  );
};

export default AmazonPointSection;
