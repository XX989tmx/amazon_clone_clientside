import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import reactBootstrap, {
  Alert,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const Login = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState({
    message: "",
    isSuccess: false,
    isError: false,
    variant: "",
  });

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
      setMessage({
        message: response.data.message,
        isSuccess: true,
        isError: false,
        variant: "success",
      });
    } catch (error) {
      console.log(error);
      setMessage({
        message: error.message,
        isSuccess: false,
        isError: true,
        variant: "danger",
      });
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container fluid="md">
      <Alert variant={Message.variant}>{Message.message}</Alert>

      <Form action="" onSubmit={loginSubmitHandler}>
        <Form.Group
          controlId="email"
          value={Email}
          onChange={emailChangeHandler}
        >
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" placeholder="login@example.com" />
        </Form.Group>
        <Form.Group
          controlId="password"
          value={Password}
          onChange={passwordChangeHandler}
        >
          <Form.Label>パスワード</Form.Label>
          <Form.Control type="password" placeholder="半角英数字８文字以上" />
        </Form.Group>

        <Button type="submit">ログイン</Button>
      </Form>
    </Container>
  );
};

export default Login;
