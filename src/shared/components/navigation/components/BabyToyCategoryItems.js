import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfBabyAndToy from "./ItemOfBabyAndToy";
const BabyToyCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfBabyAndToy />
      </Col>
    </Row>
  );
};

export default BabyToyCategoryItems;
