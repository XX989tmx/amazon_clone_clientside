import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import DrugStoreBeautyCategoryItems from "./DrugStoreBeautyCategoryItems";
const DrugStoreBeauty = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ドラッグストア、ビューティー click</Col>
        </Row>
        <DrugStoreBeautyCategoryItems />
      </Col>
    </Row>
  );
};

export default DrugStoreBeauty;
