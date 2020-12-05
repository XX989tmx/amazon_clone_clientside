import Axios from "axios";
import React, { useContext, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const DeleteCartItemButton = (props) => {
  const auth = useContext(AuthContext);
 
  // const deleteButtonHandler = (event) => {
  //   event.preventDefault();
  //   props.setDeleteTargetItemHandler(props.id);
  //   props.deleteCartItemSubmitHandler();
  // };
  const deleteCartItemSubmitHandler = async (event) => {
    event.preventDefault()
    
    let response;
    try {
      response = await Axios.delete(
        process.env.REACT_APP_BACKEND_URL +
          `/users/removeItemFromCart/${auth.userId}/${props.cartItemId}?token=${auth.token}`
      );
    } catch (error) {
      console.log(error);
    }
    if (response) {
      props.changeCartHandler();
    }
  };

  return (
    <Col md={12} lg={6}>
      <Button variant={"danger"} onClick={deleteCartItemSubmitHandler}>
        delete
      </Button>
    </Col>
  );
};

export default DeleteCartItemButton;
