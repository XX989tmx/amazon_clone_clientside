import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const DrugStoreBeauty = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>ドラッグストア、ビューティー click</Col>
        </Row>
        <Row>
          <Col>
            show close
            <Row>
              <Col>
                <Row>
                  <Col>ドラッグストア</Col>
                </Row>
                <Row>
                  <Col xs={12}>each child category map</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>ビューティーストア</Col>
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

export default DrugStoreBeauty;
