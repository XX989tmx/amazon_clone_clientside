import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfSportsOutdoor from "./ItemOfSportsOutdoor";
const SportsOutdoorCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfSportsOutdoor />
      </Col>
    </Row>
  );
};

export default SportsOutdoorCategoryItems;
