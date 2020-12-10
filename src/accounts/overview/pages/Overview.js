import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const Overview = () => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h2>　アカウントサービス</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col xs={12} md={6} lg={4}>
                        <Row>
                          <Col xs={2} md={3}>
                            img
                          </Col>
                          <Col xs={10} md={9}>
                            <Row>
                              <Col>注文履歴</Col>
                            </Row>
                            <Row>
                              <Col>配送状況の確認返品手続き</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <Row>
                          <Col xs={2} md={3}>
                            img
                          </Col>
                          <Col xs={10} md={9}>
                            <Row>
                              <Col>ログインとセキュリティ</Col>
                            </Row>
                            <Row>
                              <Col>アカウント情報の変更</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <Row>
                          <Col xs={2} md={3}>
                            img
                          </Col>
                          <Col xs={10} md={9}>
                            <Row>
                              <Col>プライム</Col>
                            </Row>
                            <Row>
                              <Col>会員特典とお支払い方法の確認</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={6} lg={4}>
                        <Row>
                          <Col xs={2} md={3}>
                            img
                          </Col>
                          <Col xs={10} md={9}>
                            <Row>
                              <Col>アドレス帳</Col>
                            </Row>
                            <Row>
                              <Col>登録住所の追加変更</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <Row>
                          <Col xs={2} md={3}>
                            img
                          </Col>
                          <Col xs={10} md={9}>
                            <Row>
                              <Col>お客様の支払い方法</Col>
                            </Row>
                            <Row>
                              <Col>
                                支払い方法と設定の管理、残高とオファーの表示
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <Row>
                          <Col xs={2} md={3}>
                            img
                          </Col>
                          <Col xs={10} md={9}>
                            <Row>
                              <Col>AmazonCredit</Col>
                            </Row>
                            <Row>
                              <Col>残高の確認、クレジットの登録</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
