import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import PcAndOfficeCategoryItems from "./PcAndOfficeCategoryItems";
const PcAndOffice = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>パソコン、オフィス用品 click</Col>
        </Row>
        <PcAndOfficeCategoryItems />
      </Col>
    </Row>
  );
};

export default PcAndOffice;
