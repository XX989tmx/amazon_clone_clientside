import React from "react";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Alert,
} from "react-bootstrap";

const ItemUpdatedMessage = (props) => {
  return (
    <Col xs={12}>
      {props.IsUpdatedItemMessage && (
        <Alert variant={"success"}>商品点数が更新されました</Alert>
      )}
    </Col>
  );
};

export default ItemUpdatedMessage;
