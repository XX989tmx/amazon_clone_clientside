import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ClothShoesBagCategoryItems from "./ClothShoesBagCategoryItems";
const ClothShoesBag = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>服、シューズ、バッグ、腕時計 click</Col>
        </Row>
        <ClothShoesBagCategoryItems />
      </Col>
    </Row>
  );
};

export default ClothShoesBag;
