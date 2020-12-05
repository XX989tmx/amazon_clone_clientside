import Axios from "axios";
import React, { useContext } from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const AddToCartButton = (props) => {
  const auth = useContext(AuthContext);
  const addProductToCart = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      quantity: 1,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/users/addToCart/${auth.userId}/${props.id}?token=${auth.token}`,
        body
      );
      if (response) {
        props.changeCartHandler();
        props.itemAddedToCartMessageHandler();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col>
        <Button onClick={addProductToCart}>カートに入れる</Button>
      </Col>
    </Row>
  );
};

export default AddToCartButton;
