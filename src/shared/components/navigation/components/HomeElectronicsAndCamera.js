import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import HomeElectronicsAndCameraCategoryItems from "./HomeElectronicsAndCameraCategoryItems";

const HomeElectronicsAndCamera = (props) => {
  const [isCategoryCardOpen, setIsCategoryCardOpen] = useState(false);

  const categoryCardOpener = () => {
    setIsCategoryCardOpen((prev) => !prev);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col onClick={categoryCardOpener}>
            家電、カメラ、AV機器 {isCategoryCardOpen ? "close" : "open"}
          </Col>
        </Row>
        {isCategoryCardOpen && <HomeElectronicsAndCameraCategoryItems />}
      </Col>
    </Row>
  );
};

export default HomeElectronicsAndCamera;
