import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import reactBootstrap, { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const SellerLogin = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      email: Email,
      password: Password,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL + "/sellers/login",
        body
      );
      console.log(response);
      auth.sellerLogin(response.data.sellerId, response.data.token);
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
    <Container>
      {Message && <h3>{Message}</h3>}
      <Form action="" onSubmit={loginSubmitHandler}>
        <Form.Group value={Email} onChange={emailChangeHandler}>
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" placeholder="eg login@example.com" />
        </Form.Group>
        <Form.Group value={Password} onChange={passwordChangeHandler}>
          <Form.Label>パスワード</Form.Label>
          <Form.Control type="password" placeholder="半角英数字８文字以上" />
        </Form.Group>

        <Button type="submit">出品者アカウントにログイン</Button>
      </Form>
    </Container>
  );
};

export default SellerLogin;
