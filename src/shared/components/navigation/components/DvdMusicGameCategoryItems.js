import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfDvdBluelay from "./ItemOfDvdBluelay";
import ItemOfDvdMusicGame from "./ItemOfDvdMusicGame";
import ItemOfGame from "./ItemOfGame";
const DvdMusicGameCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfDvdBluelay />
        <ItemOfGame />
        <ItemOfDvdMusicGame />
      </Col>
    </Row>
  );
};

export default DvdMusicGameCategoryItems;
