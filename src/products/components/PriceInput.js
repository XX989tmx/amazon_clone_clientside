import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const PriceInput = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>label</Col>
        </Row>
        <Row>
          <Col>input</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PriceInput;
