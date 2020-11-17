import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const Login = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let body;
    body = {
      email: Email,
      password: Password,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        body
      );
      console.log(response);
      auth.login(response.data.userId, response.data.token);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
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
      <form action="" onSubmit={loginSubmitHandler}>
        <input
          id="email"
          type="email"
          value={Email}
          onChange={emailChangeHandler}
        />
        <input
          id="password"
          value={Password}
          type="password"
          onChange={passwordChangeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
