import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import DvdMusicGameCategoryItems from "./DvdMusicGameCategoryItems";
const DvdMusicGame = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>DVD、ミュージック、ゲーム click</Col>
        </Row>
        <DvdMusicGameCategoryItems />
      </Col>
    </Row>
  );
};

export default DvdMusicGame;
