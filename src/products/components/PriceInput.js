import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const PriceInput = (props) => {
  const [ProductPrice, setProductPrice] = useState();

  const priceInputHandler = (event) => {
    setProductPrice(event.target.value);
    props.priceChangeHandler(ProductPrice);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            価格
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <input
              type="number"
              value={ProductPrice}
              placeholder="1000"
              onChange={priceInputHandler}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PriceInput;
