import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const DvdMusicGameCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <Row>
          <Col>
            <Row>
              <Col>DVD、Blue-Ray</Col>
            </Row>
            <Row>
              <Col>each child category map</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>ゲーム</Col>
            </Row>
            <Row>
              <Col>each child category map</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>DVD、ミュージック、ゲーム</Col>
            </Row>
            <Row>
              <Col>each child category map</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DvdMusicGameCategoryItems;