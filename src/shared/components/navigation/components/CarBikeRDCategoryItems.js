import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const CarBikeRDCategoryItems = (props) => {
  return (
    <Row>
      <Col>
        show close
        <Row>
          <Col>
            <Row>
              <Col>車、バイク、産業、研究開発</Col>
            </Row>
            <Row>
              <Col xs={12}>すべての産業、研究開発用品</Col>
              <Col xs={12}>each child category map</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CarBikeRDCategoryItems;
