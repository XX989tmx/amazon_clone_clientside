import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../shared/context/auth-context";

const OrderHistory = () => {
  const auth = useContext(AuthContext);
  const [Message, setMessage] = useState();
  useEffect(() => {
    const fetch = async (params) => {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/orders/getAllOrderHistory/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <h1>OrderHistory</h1>
    </div>
  );
};

export default OrderHistory;
