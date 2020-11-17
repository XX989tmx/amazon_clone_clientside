import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import CountrySelector from "../components/CountrySelector";
import TodoufukenSelector from "../components/TodoufukenSelector";

const UpdateAddress = () => {
  const auth = useContext(AuthContext);
  const addressId = useParams().addressId;
  const history = useHistory();
  const [Name, setName] = useState();
  const [Country, setCountry] = useState();
  const [Zipcode1, setZipcode1] = useState();
  const [Zipcode2, setZipcode2] = useState();
  const [TodoufukenValue, setTodoufukenValue] = useState();
  const [Address1, setAddress1] = useState();
  const [Address2, setAddress2] = useState();
  const [Company, setCompany] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Message, setMessage] = useState();

  const addressUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    const zipCode = String(Zipcode1) + "-" + String(Zipcode2);
    let body = {
      zipCode: zipCode,
      country: Country,
      name: Name,
      todoufuken: TodoufukenValue,
      addressInfo1: Address1,
      addressInfo2: Address2,
      email: Email,
      phoneNumber: PhoneNumber,
      company: Company,
    };
    let response;
    try {
      response = await Axios.patch(
        process.env.REACT_APP_BACKEND_URL +
          `/addresses/updateAddress/${addressId}?token=${auth.token}`,
        body
      );
      console.log(response);
      const responseMessage = response.data.message;
      const redirectMessage = "５秒以内に自動的にリダイレクトされます。";
      const joinedMessage = responseMessage + redirectMessage;
      setMessage(joinedMessage);
      if (response) {
        setTimeout(() => {
          history.push("/account/addresses");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };
  const zipcode1ChangeHandler = (event) => {
    setZipcode1(event.target.value);
  };
  const zipcode2ChangeHandler = (event) => {
    setZipcode2(event.target.value);
  };
  const todoufukenChangeHandler = (event) => {
    setTodoufukenValue(event.target.value);
  };
  const address1ChangeHanlder = (event) => {
    setAddress1(event.target.value);
  };
  const address2ChangeHandler = (event) => {
    setAddress2(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setCompany(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div>
      <h3>{Message}</h3>
      <h1>UpdateAddress</h1>

      <form action="" onSubmit={addressUpdateSubmitHandler}>
        <CountrySelector countryChangeHandler={countryChangeHandler} />
        <span>氏名</span>{" "}
        <input type="text" value={Name} onChange={nameChangeHandler} />
        <span>郵便番号</span>{" "}
        <input
          type="number"
          value={Zipcode1}
          onChange={zipcode1ChangeHandler}
        />
        -
        <input
          type="number"
          value={Zipcode2}
          onChange={zipcode2ChangeHandler}
        />
        <span>都道府県</span>
        <TodoufukenSelector todoufukenChangeHandler={todoufukenChangeHandler} />
        <span>住所１</span>
        <input type="text" value={Address1} onChange={address1ChangeHanlder} />
        <span>住所２</span>
        <input type="text" value={Address2} onChange={address2ChangeHandler} />
        <span>会社名</span>
        <input type="text" value={Company} onChange={companyChangeHandler} />
        <span>Eメール</span>
        <input type="email" value={Email} onChange={emailChangeHandler} />
        <span>電話番号</span>
        <input
          type="number"
          name=""
          id=""
          value={PhoneNumber}
          onChange={phoneNumberChangeHandler}
        />
        <button type="submit">住所を変更する</button>
      </form>
    </div>
  );
};

export default UpdateAddress;
