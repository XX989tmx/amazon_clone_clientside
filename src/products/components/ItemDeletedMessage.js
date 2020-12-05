import React from "react";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Alert,
} from "react-bootstrap";
const ItemDeletedMessage = (props) => {
  return (
    <Col xs={12}>
      {props.IsDeletedItemMessage && (
        <Alert variant={"success"}>商品が削除されました</Alert>
      )}
    </Col>
  );
};

export default ItemDeletedMessage;
