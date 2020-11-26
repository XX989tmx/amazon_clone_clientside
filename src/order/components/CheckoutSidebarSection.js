import React from "react";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSidebarSection = (props) => {
  return (
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
  );
};

export default CheckoutSidebarSection;
