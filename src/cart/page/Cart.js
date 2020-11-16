import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const Cart = () => {
  // useeffectで現在のカートの中身をFetch
  const auth = useContext(AuthContext);
  const history = useHistory();
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
  // 後で買うリストデータもuseeffectでFetch。backendにロジック追加

  const goToCheckoutHandler = (event) => {
    event.preventDefault();
    history.push("/order/checkout");
  };
  return (
    <div>
      <h1>Cart page</h1>

      {/* checkout pageへ移動 */}
      <button onClick={goToCheckoutHandler}>checkout</button>
      <button>empty cart</button>
    </div>
  );
};

export default Cart;
