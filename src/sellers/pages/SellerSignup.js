import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const SellerSignup = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");

  const signupSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      name: Name,
      email: Email,
      password: Password,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL + "/sellers/signup",
        body
      );
      auth.sellerLogin(response.data.sellerId, response.data.token);
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {Message && <h3>{Message}</h3>}
      <form action="" onSubmit={signupSubmitHandler}>
        <input type="text" value={Name} onChange={nameChangeHandler} />
        <input type="email" value={Email} onChange={emailChangeHandler} />
        <input
          type="password"
          value={Password}
          onChange={passwordChangeHandler}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SellerSignup;
