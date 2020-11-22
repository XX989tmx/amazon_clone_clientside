import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import reactBootstrap, {
  Alert,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const SellerSignup = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState({
    message: "",
    isSuccess: false,
    isError: false,
    variant: "",
  });

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
    <Container>
      <Alert variant={Message.variant}>{Message.message}</Alert>

      <Form onSubmit={signupSubmitHandler}>
        <Form.Group controlId="name" value={Name} onChange={nameChangeHandler}>
          <Form.Label>お名前</Form.Label>
          <Form.Control type="text" placeholder="お名前" />
        </Form.Group>
        <Form.Group
          controlId="email"
          value={Email}
          onChange={emailChangeHandler}
        >
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" placeholder="email@example.com" />
        </Form.Group>
        <Form.Group
          controlId="password"
          value={Password}
          onChange={passwordChangeHandler}
        >
          <Form.Label>パスワード</Form.Label>
          <Form.Control type="password" placeholder="半角英数字８文字以上" />
        </Form.Group>

        <Button type="submit">出品者アカウントに登録</Button>
      </Form>
    </Container>
  );
};

export default SellerSignup;
