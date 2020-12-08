import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import ItemOfHomeElectronicsAndCamera from "./ItemOfHomeElectronicsAndCamera";
import ItemOfUsedItemStore from "./ItemOfUsedItemStore";
const HomeElectronicsAndCameraCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <ItemOfHomeElectronicsAndCamera />
        <ItemOfUsedItemStore />
      </Col>
    </Row>
  );
};

export default HomeElectronicsAndCameraCategoryItems;
