import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
const OrderHistoryItemBody = (props) => {
  return (
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
  );
};

export default OrderHistoryItemBody;
