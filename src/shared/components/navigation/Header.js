import React from "react";
import reactBootstrap, {
  Col,
  Row,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Row
        style={{
          height: "100%",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <Col xs={1} md={1} xl={1} style={{ height: "50px" }}>
          <Row>
            <Col>b</Col>
          </Row>
        </Col>
        <Col xs={1} md={1} xl={1}>
          <Row>
            <Col>logo</Col>
          </Row>
        </Col>
        <Col xs={10} md={10} xl={6}>
          <Row>
            <Col>
              <Form>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} xl={4}>
          <Row>
            <Col xs={1}></Col>
            <Col xs={5}>
              <span>sdadsdasadssan</span>
              <br /> アカウントリスト
            </Col>
            <Col xs={3}>注文履歴</Col>
            <Col xs={3}>カート</Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
