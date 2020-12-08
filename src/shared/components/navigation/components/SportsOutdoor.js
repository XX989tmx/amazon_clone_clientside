import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import SportsOutdoorCategoryItems from "./SportsOutdoorCategoryItems";
const SportsOutdoor = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>スポーツ＆アウトドア click</Col>
        </Row>
        <SportsOutdoorCategoryItems />
      </Col>
    </Row>
  );
};

export default SportsOutdoor;
