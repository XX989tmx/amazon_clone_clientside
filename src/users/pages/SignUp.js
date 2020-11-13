import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const SignUp = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SignupSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    const data = {
      name: Name,
      email: Email,
      password: Password,
    };
    console.log(data);
    try {
      response = await Axios.post(
        `http://localhost:8080/api/users/signup`,
        data
      );
    } catch (error) {
      console.log(error);
    }
    
    auth.login(response.data.userId, response.data.token);
    console.log(response);
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
      <form action="" onSubmit={SignupSubmitHandler}>
        <input
          id="name"
          type="text"
          value={Name}
          onChange={nameChangeHandler}
        />
        <input
          id="email"
          type="email"
          value={Email}
          onChange={emailChangeHandler}
        />
        <input
          id="password"
          type="password"
          value={Password}
          onChange={passwordChangeHandler}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
