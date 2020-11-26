import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutMainSection = (props) => {
  return (
    <Row>
      <Col lg={9}>
        main section
        <Row>
          <Col>notification section</Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
            <Row>
              <Col>お届け先住所</Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>name</Col>
                </Row>
                <Row>
                  <Col>zipcode</Col>
                </Row>
                <Row>
                  <Col>addressinfo1</Col>
                </Row>
                <Row>
                  <Col>addressinfo2</Col>
                </Row>
                <Row>
                  <Col>phonenumber</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={8}>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Row>
                      <Col>支払い方法</Col>
                    </Row>
                    <Row>
                      <Col>shimo4keta</Col>
                    </Row>
                    <Row>
                      <Col>bunkatu explanation</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>お支払い方法に紐付いた住所</Col>
                    </Row>
                    <Row>
                      <Col>name</Col>
                    </Row>
                    <Row>
                      <Col>zipcode</Col>
                    </Row>
                    <Row>
                      <Col>addresinfo1</Col>
                    </Row>
                    <Row>
                      <Col>addressinfo2</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Row>
                      <Col>Amazon points</Col>
                    </Row>
                    <Row>
                      <Col>point balance</Col>
                    </Row>
                    <Row>
                      <Col>point use inout</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            mainsection body section
            <Row>
              <Col>
                <Row>
                  <Col>delivery date</Col>
                  <Col>delivery date explanation</Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Row>
                      <Col xs={12} style={{ height: "200px" }}>
                        <Row>
                          <Col xs={4}>
                            <Row>
                              <Col style={{ height: "200px" }}>img</Col>
                            </Row>
                          </Col>
                          <Col xs={8} style={{ height: "200px" }}>
                            <Row>
                              <Col>product name</Col>
                            </Row>
                            <Row>
                              <Col>price</Col>
                            </Row>
                            <Row>
                              <Col>gettable point</Col>
                            </Row>
                            <Row>
                              <Col>qantity</Col>
                            </Row>
                            <Row>
                              <Col>seller</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} style={{ height: "200px" }}>
                        <Row>
                          <Col xs={4}>
                            <Row>
                              <Col style={{ height: "200px" }}>img</Col>
                            </Row>
                          </Col>
                          <Col xs={8} style={{ height: "200px" }}>
                            <Row>
                              <Col>product name</Col>
                            </Row>
                            <Row>
                              <Col>price</Col>
                            </Row>
                            <Row>
                              <Col>gettable point</Col>
                            </Row>
                            <Row>
                              <Col>qantity</Col>
                            </Row>
                            <Row>
                              <Col>seller</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} style={{ height: "200px" }}>
                        <Row>
                          <Col xs={4}>
                            <Row>
                              <Col style={{ height: "200px" }}>img</Col>
                            </Row>
                          </Col>
                          <Col xs={8} style={{ height: "200px" }}>
                            <Row>
                              <Col>product name</Col>
                            </Row>
                            <Row>
                              <Col>price</Col>
                            </Row>
                            <Row>
                              <Col>gettable point</Col>
                            </Row>
                            <Row>
                              <Col>qantity</Col>
                            </Row>
                            <Row>
                              <Col>seller</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6}>
                    <Row>
                      <Col>プライム配送オプション</Col>
                    </Row>
                    <Row>
                      <Col xs={1}></Col>
                      <Col xs={11}>
                        {" "}
                        <Row>
                          <Col>tuuzyouhaisou explanation</Col>
                        </Row>
                        <Row>
                          <Col>manebarai</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}></Col>
                      <Col xs={5}>oisogibinn</Col>
                      <Col xs={5}>delivery date</Col>
                    </Row>
                    <Row>
                      <Col xs={1}></Col>
                      <Col xs={11}>
                        <Row>
                          <Col>otodokenitizishiteibinn</Col>
                        </Row>
                        <Row>
                          <Col>delivery date</Col>
                        </Row>
                        <Row>
                          <Col>explanation</Col>
                        </Row>
                        <Row>
                          <Col> link to detail</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={3}>
        <Row>
          <Col>
            <Row>
              <Col>
                <Link>
                  {" "}
                  <Button> 注文を確定する</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>注文内容</Col>
                </Row>
                <Row>
                  <Col>商品の小計</Col>
                  <Col>total price</Col>
                </Row>
                <Row>
                  <Col>配送料手数料</Col>
                  <Col>cost</Col>
                </Row>
                <Row>
                  <Col>御請求額</Col>
                  <Col>total price</Col>
                </Row>
                <Row>
                  <Col>獲得ポイント</Col>
                  <Col>
                    <Row>
                      <Col xs={12}>acquirable points</Col>
                      <Col xs={12}>円相当</Col>
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
              <Col>手数料配送料について</Col>
            </Row>
            <Row>
              <Col>tesuuryou expnanation</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <Link>
                  {" "}
                  <Button> 注文を確定する</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>tyuumonn explanation</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CheckoutMainSection;
