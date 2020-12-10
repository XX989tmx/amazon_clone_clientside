import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import LowerRow from "./LowerRow";
import UpperRow from "./UpperRow";
const UpperNavigation = (props) => {
  return (
    <Row>
      <Col>
        <UpperRow />
        <LowerRow />
      </Col>
    </Row>
  );
};

export default UpperNavigation;
