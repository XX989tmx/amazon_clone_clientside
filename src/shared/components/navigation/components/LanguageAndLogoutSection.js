import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const LanguageAndLogoutSection = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>アカウントサービス</Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>ログアウト</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LanguageAndLogoutSection;
