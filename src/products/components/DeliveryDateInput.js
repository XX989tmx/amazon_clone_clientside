import React, { useState } from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const DeliveryDateInput = (props) => {
  const [ProductDeliveryDate, setProductDeliveryDate] = useState();

  const deliveryDateInputHandler = (event) => {
    setProductDeliveryDate(event.target.value);
    props.deliveryDateChangeHandler(ProductDeliveryDate);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            お届け日
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <input
              type="date"
              placeholder="2020-12-30"
              value={ProductDeliveryDate}
              onChange={deliveryDateInputHandler}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DeliveryDateInput;
