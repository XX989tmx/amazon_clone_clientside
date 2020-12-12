import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const SubmitButton = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Button type="submit">商品を出品する</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SubmitButton;
