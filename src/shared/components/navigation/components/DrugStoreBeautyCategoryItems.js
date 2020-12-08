import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfBeautyStore from "./ItemOfBeautyStore";
import ItemOfDrugStore from "./ItemOfDrugStore";
const DrugStoreBeautyCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfDrugStore />
        <ItemOfBeautyStore />
      </Col>
    </Row>
  );
};

export default DrugStoreBeautyCategoryItems;
