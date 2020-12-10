import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const LowerNavigation = (props) => {
  return (
    <Row>
      <Col xs={12} md={6} lg={4}>
        <Row>
          <Col>
            <Row>
              <Col>お買い物設定</Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>非表示にした注文の表示</Col>
                </Row>
                <Row>
                  <Col>言語設定の変更</Col>
                </Row>
                <Row>
                  <Col>マイリスト</Col>
                </Row>
                <Row>
                  <Col>プロフィール</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Row>
          <Col>
            <Row>
              <Col>その他アカウント</Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>出品サービスアカウント</Col>
                </Row>
                <Row>
                  <Col>出品用アカウントにログイン</Col>
                </Row>
                <Row>
                  <Col>Amazonログインの設定</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LowerNavigation;
