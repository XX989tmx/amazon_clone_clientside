import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfDiyGarden = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>DIY、工具、ガーデン</Col>
        </Row>
        <Row>
          <Col xs={12}>すべてのDIY、工具、ガーデン</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDiyGarden;
