import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const HomeElectronicsAndCamera = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>家電、カメラ、AV機器 click</Col>
        </Row>
        <Row>
          <Col>
            show close
            <Row>
              <Col>
                <Row>
                  <Col>家電、カメラ、AV機器</Col>
                </Row>
                <Row>
                  <Col xs={12}>すべての家電</Col>
                  <Col xs={12}>each child category map</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>中古ストア</Col>
                </Row>
                <Row>
                  <Col xs={12}>すべての中古</Col>
                  <Col xs={12}>each child category map</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomeElectronicsAndCamera;
