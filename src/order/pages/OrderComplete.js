import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const OrderComplete = () => {
  const [Message, setMessage] = useState();
  // useeffectで直近のOrderデータをfetch
  const auth = useContext(AuthContext);
  const orderId = useParams().orderId;
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          `http://localhost:8080/api/orders/getLatestOrderData/${orderId}?token=${auth.token}`
        );
        // このデータを元に、OrderHistoryへのリンクをつくる。その際、このデータのidを使う。確定された注文、という表示形式で。
        console.log(response);
        setMessage(response.data.message);
      } catch (error) {
        console.log(error);
        setMessage(error.message);
      }
    }
    fetch();
  }, []);
  return (
    <div>
      <h3>{Message}</h3>
      <h3>order complete</h3>
    </div>
  );
};

export default OrderComplete;
