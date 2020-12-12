import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ImageInputSection from "./ImageInputSection";
import TextInputSection from "./TextInputSection";
const ProductInformationInputSection = (props) => {
  return (
    <Row>
      <Col>
        <TextInputSection />
        <ImageInputSection />
      </Col>
    </Row>
  );
};

export default ProductInformationInputSection;
