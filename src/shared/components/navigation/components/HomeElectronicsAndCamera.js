import React from "react";
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
  return (
    <Row>
      <Col>
        <Row>
          <Col>家電、カメラ、AV機器 click</Col>
        </Row>
        <HomeElectronicsAndCameraCategoryItems />
      </Col>
    </Row>
  );
};

export default HomeElectronicsAndCamera;
