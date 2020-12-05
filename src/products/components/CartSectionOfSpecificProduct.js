import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import CartItemTotalCount from "./CartItemTotalCount";
import ContentsOfCart from "./ContentsOfCart";
import GoToCheckoutButton from "./GoToCheckoutButton";
import SumOfPriceOfCartItems from "./SumOfPriceOfCartItems";

const CartSectionOfSpecificProduct = (props) => {
  const auth = useContext(AuthContext);
  const [CartState, setCartState] = useState();
  const [TotalPriceOfCart, setTotalPriceOfCart] = useState();
  const [TotalCountOfCart, setTotalCountOfCart] = useState();
  const [CartItems, setCartItems] = useState([]);
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
  return (
    <Col md={2} lg={2} xl={2}>
      cart side bar
      <CartItemTotalCount TotalCountOfCart={TotalCountOfCart} />
      <SumOfPriceOfCartItems TotalPriceOfCart={TotalPriceOfCart} />
      <GoToCheckoutButton />
      <ContentsOfCart
        CartItems={CartItems}
        StockQuantityOptions={props.StockQuantityOptions}
      />
    </Col>
  );
};

export default CartSectionOfSpecificProduct;
