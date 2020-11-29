import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../../shared/context/auth-context";

const OrderHistory = () => {
  const auth = useContext(AuthContext);
  const [Message, setMessage] = useState();
  useEffect(() => {
    const fetch = async (params) => {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/orders/getAllOrderHistory/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={12} lg={10}>
            <Row>
              <Col>bread crams</Col>
            </Row>
            <Row>
              <Col md={6}>注文履歴 header</Col>
              <Col md={6}>search bar</Col>
            </Row>
            <Row>
              <Col xs={3} md={3}>
                注文
              </Col>
              <Col xs={3} md={3}>
                再び購入
              </Col>
              <Col xs={3} md={3}>
                未発送の注文
              </Col>
              <Col xs={3} md={3}>
                キャンセルされた注文
              </Col>
            </Row>
            <Row>
              <Col>sort selector</Col>
              <Col>に確定されたN件の注文</Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Row>
                      <Col xs={6} lg={2}>
                        <Row>
                          <Col>注文日</Col>
                        </Row>
                        <Row>
                          <Col>date of order</Col>
                        </Row>
                      </Col>
                      <Col xs={6} lg={2}>
                        <Row>
                          <Col>合計</Col>
                        </Row>
                        <Row>
                          <Col>total price</Col>
                        </Row>
                      </Col>
                      <Col xs={6} lg={4}>
                        <Row>
                          <Col>お届け先</Col>
                        </Row>
                        <Row>
                          <Col>address name</Col>
                        </Row>
                      </Col>
                      <Col xs={6} lg={4}>
                        <Row>
                          <Col>注文番号</Col>
                          <Col>aaa-aaaa-aaaa</Col>
                        </Row>
                        <Row>
                          <Col>注文の詳細</Col>
                          <Col>領収書</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col xs={8} md={9}>
                        <Row>
                          <Col>
                            <Row>
                              <Col>配送日</Col>
                            </Row>
                            <Row>
                              <Col>status</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Row>
                              <Col md={2}>
                                <Row>
                                  <Col style={{ height: "120px" }}>image</Col>
                                </Row>
                              </Col>
                              <Col md={10}>
                                <Row>
                                  <Col>name</Col>
                                </Row>
                                <Row>
                                  <Col>seller</Col>
                                </Row>
                                <Row>
                                  <Col>price</Col>
                                </Row>
                                <Row>
                                  <Col>buy again button</Col>
                                </Row>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={2}>
                                <Row>
                                  <Col style={{ height: "120px" }}>image</Col>
                                </Row>
                              </Col>
                              <Col md={10}>
                                <Row>
                                  <Col>name</Col>
                                </Row>
                                <Row>
                                  <Col>seller</Col>
                                </Row>
                                <Row>
                                  <Col>price</Col>
                                </Row>
                                <Row>
                                  <Col>buy again button</Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={4} md={3}>
                        <Row>
                          <Col>
                            <Button>配送状況を確認</Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button>商品の返品</Button>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Button>商品レビューを書く</Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button>注文を非表示にする</Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={2}>
            <Row>
              <Col>
                <Row>
                  <Col>もう一度買う</Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col xs={12} md={12}>
                        <Row>
                          <Col style={{ height: "120px" }}>img</Col>
                        </Row>
                      </Col>
                      <Col xs={12} md={12}>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button>カートに入れる</Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Row>
                          <Col style={{ height: "120px" }}>img</Col>
                        </Row>
                      </Col>
                      <Col xs={12} md={12}>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button>カートに入れる</Button>
                          </Col>
                        </Row>
                      </Col>
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

export default OrderHistory;
