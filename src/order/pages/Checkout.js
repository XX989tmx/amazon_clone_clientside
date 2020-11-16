import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const Checkout = () => {
  const auth = useContext(AuthContext);
  const [PaymentMethod, setPaymentMethod] = useState();
  const history = useHistory();
  //useeffect でCartの中身をFetch *backendにロジック追加
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          `http://localhost:8080/api/users/getLatestContentOfCart/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const paymentMethodHandler = (event) => {
    setPaymentMethod(event.target.value);
  };

  const completePurchaseHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      nameOfPaymentMethod: PaymentMethod,
    };
    try {
      response = await Axios.post(
        `http://localhost:8080/api/orders/createOrder/${auth.userId}/5fb2be90be17035930da9466?token=${auth.token}`,
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
      checkout
      <form action="" onSubmit={completePurchaseHandler}>
        <select name="" id="paymentMethod" onChange={paymentMethodHandler}>
          <option value="">chose payment method</option>
          <option value="CreditCard">Credit Card</option>
        </select>
        <button type="submit">complete purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
