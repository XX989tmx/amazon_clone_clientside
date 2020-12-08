import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import CategoryBody from "./CategoryBody";
const CategorySection = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>カテゴリー</Col>
        </Row>
        <CategoryBody />
      </Col>
    </Row>
  );
};

export default CategorySection;
