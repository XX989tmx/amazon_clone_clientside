import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const SellerLogin = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      email: Email,
      password: Password,
    };
    try {
      response = await Axios.post(
        "http://localhost:8080/api/sellers/login",
        body
      );
    } catch (error) {
      console.log(error);
    }
    console.log(response);
    auth.sellerLogin(response.data.sellerId, response.data.token);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={loginSubmitHandler}>
        <input type="email" value={Email} onChange={emailChangeHandler} />
        <input
          type="password"
          value={Password}
          onChange={passwordChangeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SellerLogin;
