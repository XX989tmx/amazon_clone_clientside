import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import reactBootstrap, { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const SignUp = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");

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
        process.env.REACT_APP_BACKEND_URL + `/users/signup`,
        data
      );
      auth.login(response.data.userId, response.data.token);
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
    <Container fluid="md">
      {Message && <h3>{Message}</h3>}
      <Form action="" onSubmit={SignupSubmitHandler}>
        <Form.Group controlId="name" value={Name} onChange={nameChangeHandler}>
          <Form.Label>名前</Form.Label>
          <Form.Control type="text" placeholder="お名前" />
        </Form.Group>
        <Form.Group
          controlId="email"
          value={Email}
          onChange={emailChangeHandler}
        >
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" placeholder="mail@example.com" />
        </Form.Group>
        <Form.Group
          controlId="password"
          value={Password}
          onChange={passwordChangeHandler}
        >
          <Form.Label>パスワード</Form.Label>
          <Form.Control type="password" placeholder="半角英数字８文字以上" />
        </Form.Group>

        <Button type="submit">サインアップ</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
