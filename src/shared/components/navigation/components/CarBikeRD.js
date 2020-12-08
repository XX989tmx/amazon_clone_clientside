import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import CarBikeRDCategoryItems from "./CarBikeRDCategoryItems";
const CarBikeRD = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>車、バイク、産業、研究開発 click</Col>
        </Row>
        <CarBikeRDCategoryItems />
      </Col>
    </Row>
  );
};

export default CarBikeRD;
