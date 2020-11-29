import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import reactBootstrap, { Col, Container, Row, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import CheckoutHeaderSection from "../components/CheckoutHeaderSection";
import CheckoutMainSection from "../components/CheckoutMainSection";
import CheckoutRiyouKiyakuSection from "../components/CheckoutRiyouKiyakuSection";

const Checkout = () => {
  const auth = useContext(AuthContext);
  const [PaymentMethod, setPaymentMethod] = useState("creditCard");
  const [cartItems, setCartItems] = useState([]);
  const [TotalPrice, setTotalPrice] = useState();
  const [Address, setAddress] = useState({});
  const [AmazonPointBalance, setAmazonPointBalance] = useState();
  const [UsedAmazonPoint, setUsedAmazonPoint] = useState(0);
  const [AddressId, setAddressId] = useState();
  const history = useHistory();
  //useeffect でCartの中身をFetch *backendにロジック追加
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/users/getLatestContentOfCart/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      const data = response.data;
      setCartItems(data.user.cart.items);
      setTotalPrice(data.user.cart.totalPrice);
      if (data.user.addresses.length !== 0) {
        //default address
        setAddress(data.user.addresses[0]);
        setAddressId(data.user.addresses[0].id)
      }
      // else push to create address page
      setAmazonPointBalance(data.user.wallet.amazonPoint);
    }
    fetch();
  }, []);

  const paymentMethodHandler = (params) => {
    setPaymentMethod(params);
  };

  const amazonPointChangeHandler = (params) => {
    setUsedAmazonPoint(params);
    console.log(UsedAmazonPoint);
  }

  const completePurchaseHandler = async (event) => {
    // event.preventDefault();
    let response;
    let body = {
      nameOfPaymentMethod: PaymentMethod,
      amazonPointAmount: UsedAmazonPoint ? UsedAmazonPoint : 0,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/orders/createOrder/${auth.userId}/${AddressId}?token=${auth.token}`,
        body
      );
      console.log(response);
      const data = response.data;
      const orderId = data.createdOrder._id;
      // order cpmplete page へhistory.push
      history.push(`/order/orderComplete/${orderId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* checkout
      <form action="" onSubmit={completePurchaseHandler}>
        <select name="" id="paymentMethod" onChange={paymentMethodHandler}>
          <option value="">chose payment method</option>
          <option value="CreditCard">Credit Card</option>
        </select>
        <button type="submit">complete purchase</button>
      </form> */}
      <Container fluid="md">
        <Row>
          <Col xs={12}>
            <CheckoutHeaderSection />
            <CheckoutMainSection
              cartItems={cartItems}
              TotalPrice={TotalPrice}
              Address={Address}
              AmazonPointBalance={AmazonPointBalance}
              paymentMethodHandler={paymentMethodHandler}
              amazonPointChangeHandler={amazonPointChangeHandler}
              completePurchaseHandler={completePurchaseHandler}
            />
            <CheckoutRiyouKiyakuSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
