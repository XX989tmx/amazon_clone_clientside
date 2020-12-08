import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const PcAndOfficeCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <Row>
          <Col>
            <Row>
              <Col>パソコン、周辺機器</Col>
            </Row>
            <Row>
              <Col xs={12}>すべてのパソコン、周辺機器</Col>
              <Col xs={12}>each child category map</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>PCソフト</Col>
            </Row>
            <Row>
              <Col xs={12}>すべてのPCソフト</Col>
              <Col xs={12}>each child category map</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>文房具、オフィス用品</Col>
            </Row>
            <Row>
              <Col xs={12}>すべての文房具、オフィス機器</Col>
              <Col xs={12}>each child category map</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PcAndOfficeCategoryItems;
