import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfCarBikeRD from "./ItemOfCarBikeRD";
const CarBikeRDCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfCarBikeRD />
      </Col>
    </Row>
  );
};

export default CarBikeRDCategoryItems;
