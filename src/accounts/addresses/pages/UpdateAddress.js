import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../shared/context/auth-context";
import CountrySelector from "../components/CountrySelector";
import TodoufukenSelector from "../components/TodoufukenSelector";

const UpdateAddress = () => {
  const auth = useContext(AuthContext);
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

  const addressUpdateSubmitHandler = async (event) => {
    event.preventDefault();
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
