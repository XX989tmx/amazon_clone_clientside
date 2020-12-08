import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfFoodAndBeverage = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>食品＆飲料</Col>
        </Row>
        <Row>
          <Col xs={12}>すべての食品＆飲料</Col>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfFoodAndBeverage;
