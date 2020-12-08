import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ItemOfBeautyStore = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ビューティーストア</Col>
        </Row>
        <Row>
          <Col xs={12}>each child category map</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemOfBeautyStore;
