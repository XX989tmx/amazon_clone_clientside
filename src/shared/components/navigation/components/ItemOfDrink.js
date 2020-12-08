import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfDrink = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>お酒</Col>
        </Row>
        <Row>
          <Col xs={12}>すべてのお酒</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfDrink;
