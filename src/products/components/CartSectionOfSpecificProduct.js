import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import CartItemTotalCount from "./CartItemTotalCount";
import CartMessage from "./CartMessage";
import ContentsOfCart from "./ContentsOfCart";
import EmptyCartButton from "./EmptyCartButton";
import GoToCheckoutButton from "./GoToCheckoutButton";
import SumOfPriceOfCartItems from "./SumOfPriceOfCartItems";

const CartSectionOfSpecificProduct = (props) => {
  const auth = useContext(AuthContext);
  const [CartState, setCartState] = useState();
  const [TotalPriceOfCart, setTotalPriceOfCart] = useState();
  const [TotalCountOfCart, setTotalCountOfCart] = useState();
  const [CartItems, setCartItems] = useState([]);
  const [IsAddedItemMessage, setIsAddedItemMessage] = useState(false);
  const [IsUpdatedItemMessage, setIsUpdatedItemMessage] = useState(false);
  const [IsDeletedItemMessage, setIsDeletedItemMessage] = useState(false);
  const [IsCartEmptiedMessage, setIsCartEmptiedMessage] = useState(false);
  useEffect(() => {
    async function onLoad() {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/users/getLatestContentOfCart/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
        const data = response.data;
        const cart = data.user.cart;
        const totalPrice = cart.totalPrice;
        const totalCount = cart.totalCount;
        const cartItems = cart.items;
        setTotalPriceOfCart(totalPrice);
        setTotalCountOfCart(totalCount);
        setCartItems(cartItems);
      } catch (error) {
        console.log(error);
      }
    }
    onLoad();
  }, [props.isCartChanged]);

  const updateCartItemMessageHandler = () => {
    setIsUpdatedItemMessage(true);
    setTimeout(() => {
      setIsUpdatedItemMessage(false);
    }, 4000);
  };

  const deleteItemFromCartMessageHandler = () => {
    setIsDeletedItemMessage(true);
    setTimeout(() => {
      setIsDeletedItemMessage(false);
    }, 4000);
  };

  const itemAddedToCartMessageHandler = () => {
    setIsAddedItemMessage(true);
  };

  const cartEmptiedMessageHandler = () => {
    setIsCartEmptiedMessage(true);
    setTimeout(() => {
      setIsCartEmptiedMessage(false);
    }, 4000);
  };

  const emptyCartHandler = async (event) => {
    let response;
    try {
      response = await Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/users/clearCart/${auth.userId}?token=${auth.token}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    if (response) {
      props.changeCartHandler();
      cartEmptiedMessageHandler();
    }
  };

  return (
    <Col md={2} lg={2} xl={2}>
      cart side bar
      <EmptyCartButton emptyCartHandler={emptyCartHandler} />
      <CartMessage
        IsUpdatedItemMessage={IsUpdatedItemMessage}
        IsDeletedItemMessage={IsDeletedItemMessage}
        isAddedItemMessage={props.isAddedItemMessage}
      />
      <CartItemTotalCount TotalCountOfCart={TotalCountOfCart} />
      <SumOfPriceOfCartItems TotalPriceOfCart={TotalPriceOfCart} />
      <GoToCheckoutButton />
      <ContentsOfCart
        CartItems={CartItems}
        changeCartHandler={props.changeCartHandler}
        deleteItemFromCartMessageHandler={deleteItemFromCartMessageHandler}
        updateCartItemMessageHandler={updateCartItemMessageHandler}
      />
    </Col>
  );
};

export default CartSectionOfSpecificProduct;
