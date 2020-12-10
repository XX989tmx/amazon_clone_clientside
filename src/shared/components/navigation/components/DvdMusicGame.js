import React, { useState } from "react";
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
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            DVD、ミュージック、ゲーム {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <DvdMusicGameCategoryItems />}
      </Col>
    </Row>
  );
};

export default DvdMusicGame;
