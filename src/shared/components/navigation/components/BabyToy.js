import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import BabyToyCategoryItems from "./BabyToyCategoryItems";
const BabyToy = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ベビー、おもちゃ、ホビー click</Col>
        </Row>
        <BabyToyCategoryItems />
      </Col>
    </Row>
  );
};

export default BabyToy;
