import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfOfficeItem from "./ItemOfOfficeItem";
import ItemOfPcAndDevice from "./ItemOfPcAndDevice";
import ItemOfPcSoft from "./ItemOfPcSoft";
const PcAndOfficeCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfPcAndDevice />
        <ItemOfPcSoft />
        <ItemOfOfficeItem />
      </Col>
    </Row>
  );
};

export default PcAndOfficeCategoryItems;
