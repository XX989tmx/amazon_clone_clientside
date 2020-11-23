import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductInformationSection = (props) => {
  return (
    <Row>
      <Col xs={5} lg={5} style={{ height: "100%" }}>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} style={{ height: "220px" }}>
            pic1
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
            pic2
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
            pic3
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
            pic4
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
            pic5
          </Col>
        </Row>
      </Col>
      <Col
        xs={7}
        lg={4}
        style={{
          height: "500px",
        }}
      >
        <Row>
          <Col xs={12} style={{ height: "40px" }}>
            title
          </Col>
        </Row>
        <Row>
          <Col>brand</Col>
        </Row>
        <Row>
          <Col>reqiew</Col>
        </Row>
        <Row>
          <Col>price</Col>
        </Row>
        <Row>
          <Col>description</Col>
        </Row>
      </Col>
      <Col
        xs={12}
        lg={3}
        style={{
          height: "100%",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <Row>
          <Col
            xs={{ span: 8, offset: 2 }}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            price
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>gettable point</Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>delivery date</Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>stock status</Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <select>
              <option>quantity</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Button> add to cart</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Link> seller</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Link> your registered address</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Button> add to wishlist</Button>
          </Col>
        </Row>
      </Col>{" "}
    </Row>
  );
};

export default ProductInformationSection;
