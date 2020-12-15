import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const BrandInput = (props) => {
  const [ProductBrand, setProductBrand] = useState();

  const inputChangeHandler = (event) => {
    setProductBrand(event.target.value);
    props.brandChangeHandler(ProductBrand);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            ブランド
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <input
              type="text"
              value={ProductBrand}
              onChange={inputChangeHandler}
              placeholder="ブランド名"
            /> 
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BrandInput;
