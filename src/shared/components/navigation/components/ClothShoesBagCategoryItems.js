import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfAmazonFashion from "./ItemOfAmazonFashion";
const ClothShoesBagCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfAmazonFashion />
      </Col>
    </Row>
  );
};

export default ClothShoesBagCategoryItems;
