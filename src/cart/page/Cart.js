import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const Cart = () => {
  // useeffectで現在のカートの中身をFetch
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Message, setMessage] = useState();
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
    }
    fetch();
  }, []);
  // 後で買うリストデータもuseeffectでFetch。backendにロジック追加

  const goToCheckoutHandler = (event) => {
    event.preventDefault();
    history.push("/order/checkout");
  };

  //カートを空に
  const emptyCartHandler = async (event) => {
    event.preventDefault();
    let response;
    try {
      response = await Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/users/clearCart/${auth.userId}?token=${auth.token}`
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log();
      setMessage(error.message);
    }
  };
  return (
    <div>
      <h3>{Message}</h3>
      <h1>Cart page</h1>

      {/* checkout pageへ移動 */}
      <button onClick={goToCheckoutHandler}>checkout</button>
      <button onClick={emptyCartHandler}>empty cart</button>
    </div>
  );
};

export default Cart;
