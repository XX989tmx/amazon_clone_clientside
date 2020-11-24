import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MostSoldRanking = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col lg={5}>
            <h2> 売れ筋ランキング</h2>
          </Col>
          <Col lg={7}>
            <Link> もっと見る</Link>
          </Col>
        </Row>
        <Row>
          <Col
            xs={6}
            md={4}
            lg={2}
            style={{
              height: "100%",
              padding: "10px 25px 10px 25px",
            }}
          >
            <Row style={{ height: "250px" }}>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>price</Col>
            </Row>
            <Row>
              <Col>name</Col>
            </Row>
            <Row>
              <Col>review</Col>
            </Row>
          </Col>
          <Col
            xs={6}
            md={4}
            lg={2}
            style={{
              height: "100%",
              padding: "10px 25px 10px 25px",
            }}
          >
            <Row style={{ height: "250px" }}>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>price</Col>
            </Row>
            <Row>
              <Col>name</Col>
            </Row>
            <Row>
              <Col>review</Col>
            </Row>
          </Col>
          <Col
            xs={6}
            md={4}
            lg={2}
            style={{
              height: "100%",
              padding: "10px 25px 10px 25px",
            }}
          >
            <Row style={{ height: "250px" }}>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>price</Col>
            </Row>
            <Row>
              <Col>name</Col>
            </Row>
            <Row>
              <Col>review</Col>
            </Row>
          </Col>
          <Col
            xs={6}
            md={4}
            lg={2}
            style={{
              height: "100%",
              padding: "10px 25px 10px 25px",
            }}
          >
            <Row style={{ height: "250px" }}>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>price</Col>
            </Row>
            <Row>
              <Col>name</Col>
            </Row>
            <Row>
              <Col>review</Col>
            </Row>
          </Col>
          <Col
            xs={6}
            md={4}
            lg={2}
            style={{
              height: "100%",
              padding: "10px 25px 10px 25px",
            }}
          >
            <Row style={{ height: "250px" }}>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>price</Col>
            </Row>
            <Row>
              <Col>name</Col>
            </Row>
            <Row>
              <Col>review</Col>
            </Row>
          </Col>
          <Col
            xs={6}
            md={4}
            lg={2}
            style={{
              height: "100%",
              padding: "10px 25px 10px 25px",
            }}
          >
            <Row style={{ height: "250px" }}>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>price</Col>
            </Row>
            <Row>
              <Col>name</Col>
            </Row>
            <Row>
              <Col>review</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MostSoldRanking;
