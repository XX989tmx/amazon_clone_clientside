import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ClothShoesBag = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>服、シューズ、バッグ、腕時計 click</Col>
        </Row>
        <Row>
          <Col>
            show close
            <Row>
              <Col>
                <Row>
                  <Col>Amazon Fashion</Col>
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

export default ClothShoesBag;
