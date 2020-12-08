import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfBabyAndToy = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ベビー、おもちゃ、ホビー</Col>
        </Row>
        <Row>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfBabyAndToy;
