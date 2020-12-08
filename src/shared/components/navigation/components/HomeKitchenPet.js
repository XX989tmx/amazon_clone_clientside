import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const HomeKitchenPet = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ホーム＆キッチン、ペット、DIY click</Col>
        </Row>
        <Row>
          <Col>
            show close
            <Row>
              <Col>
                <Row>
                  <Col>ホーム＆キッチン</Col>
                </Row>
                <Row>
                  <Col xs={12}>すべてのホーム＆キッチン</Col>
                  <Col xs={12}>each child category map</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>DIY、工具、ガーデン</Col>
                </Row>
                <Row>
                  <Col xs={12}>すべてのDIY、工具、ガーデン</Col>
                  <Col xs={12}>each child category map</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>ペット</Col>
                </Row>
                <Row>
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

export default HomeKitchenPet;
